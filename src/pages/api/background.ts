// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { VercelRequest, VercelResponse } from '@vercel/node'
import puppeteer from 'puppeteer'
import axios from 'axios'

export default async function handler(
    request: VercelRequest,
    response: VercelResponse,
): Promise<VercelResponse | undefined> {
    const { userId } = request.body

    const idProfile = Number.isNaN(Number.parseFloat(userId))
    let userData = null
    if (idProfile) {
        const { data } = await axios.get(
            `https://api.steampowered.com/ISteamUser/ResolveVanityURL/v1/?key=${process.env.STEAM_KEY}&vanityurl=${userId}`,
        )
        if (data.response.success) {
            const user = await axios.get(
                `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${data.response.steamid}`,
            )
            userData = user.data.response.players
        }
    } else {
        const user = await axios.get(
            `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=${process.env.STEAM_KEY}&steamids=${userId}`,
        )
        userData = user.data.response.players
    }

    const link = idProfile
        ? `https://steamcommunity.com/id/${userId}`
        : `https://steamcommunity.com/profiles/${userId}`

    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(link)
    const animatedProfile: any = await page.evaluate(() => {
        const tmp = document.querySelector(
            '.has_profile_background > .profile_animated_background',
        )
        if (tmp) return tmp.innerHTML
    })

    if (animatedProfile) {
        const initStatico = animatedProfile.split(
            '<video playsinline="" autoplay="" muted="" loop="" poster="',
        )
        const endStatico = initStatico[1].split('">')

        const initAnimated = initStatico[1].split('<source src="')
        const endAnimated = initAnimated[1].split('"')
        await browser.close()
        response.status(200).json({
            animated: endAnimated[0],
            estatico: endStatico[0],
            userData,
            success: 'ok',
        })
        return
    }

    const staticProfile: any = await page.evaluate(() => {
        const tmp = document.querySelector('.has_profile_background')
        if (tmp) return tmp.innerHTML
    })
    if (staticProfile) {
        const initStatico = staticProfile.split(
            `<div class="no_header profile_page has_profile_background  " style="background-image: url( '`,
        )
        const endStatico = initStatico[1].split(`' );">`)
        await browser.close()
        response.status(200).json({
            estatico: endStatico[0],
            userData,
            success: 'ok',
        })
        return
    }
    response.status(200).json({
        estatico:
            'https://community.cloudflare.steamstatic.com/public/images/profile/2020/bg_dots.png',
        userData,
        success: 'ok',
    })
}
