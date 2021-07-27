import React, { useState, useCallback, useEffect } from 'react'
// import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import axios from 'axios'
import { motion, AnimateSharedLayout, AnimatePresence } from 'framer-motion'
import ReactPlayer from 'react-player/lazy'
import { ImSpinner8 } from 'react-icons/im'
import { toast } from 'react-toastify'

import Header from '../components/Header'

import { Main, Container, Input, Button } from '../styles/pages/home'

interface Props {
    user?: any
    userData?: any
    setBool(val: boolean): void
}

// export const getStaticProps: GetStaticProps = async () => {
//     // const key = process.env.STEAM_KEY
//     const res = await fetch(
//         `https://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=8E3F534CE27351066123506B82C66FA2&steamids=76561198057370526`,
//     )
//     const data = await res.json()
//     if (!data) {
//         return {
//             notFound: true,
//         }
//     }
//     return {
//         props: { user: data.response.players[0] },
//         revalidate: 10,
//     }
// }

export const UserWindow: React.FC<Props> = props => {
    const { userData, setBool } = props
    return (
        <motion.div
            layoutId="1"
            className="max-w-6xl rounded-xl mt-96"
            style={{
                position: 'absolute',
                width: '100%',
                height: '700px',
                marginTop: '-1000px',
                backgroundColor: '#111214',
                zIndex: 1000,
            }}
            onClick={() => setBool(false)}
        >
            <Main className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 rounded-t-md">
                {userData.userData[0].steamid}
            </Main>
            <div
                className="flex justify-center"
                style={{
                    padding: '0px',
                    margin: '0px',
                }}
            >
                {userData.animated && (
                    <div>
                        <ReactPlayer
                            url={userData.animated}
                            loop
                            playing
                            width="100%"
                            height="100%"
                        />
                    </div>
                )}
                {!userData.animated && (
                    <div style={{ height: '700px' }}>
                        <Image
                            src={userData.estatico}
                            width={1075}
                            height={675}
                        />
                    </div>
                )}
            </div>
        </motion.div>
    )
}

interface resData {
    animated?: string
    estatico?: string
    success?: string
    userData: any[]
}

const Home: React.FC<Props> = ({ user }) => {
    const [bool, setBool] = useState(false)
    const [loading, setLoading] = useState(false)
    const [userId, setUserId] = useState<string>('')
    const [userBackground, setUserBackground] = useState<resData>()

    const pesquisar = useCallback(async () => {
        if (userId === '' || userId === undefined) {
            toast.dark('Insira seu ID ou username 🦄')
            return
        }
        setLoading(true)
        const data: any = await axios.post(`/api/background`, {
            userId,
        })
        if (data.data.success) {
            setUserBackground(data.data)
            setBool(!bool)
            setUserId('')
        }
        setLoading(false)
    }, [userId, bool])

    const returnStatus = (idStatus: number) => {
        switch (idStatus) {
            case 0:
                return <a>Offline</a>
            case 1:
                return <a>Online</a>
            case 2:
                return <a>Busy</a>
            case 3:
                return <a>Away</a>
            case 4:
                return <a>Snooze</a>
            case 5:
                return <a>looking to trade</a>
            case 6:
                return <a>looking to play</a>
            default:
                return <a>N/A</a>
        }
    }

    useEffect(() => {
        if (bool === false) setUserBackground(undefined)
    }, [bool])

    return (
        <Container>
            <Head>
                <title>SteamBackground</title>
            </Head>
            <Header />
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex h-screen justify-center items-center -mt-32">
                    <div className="w-4/5 lg:w-2/4 title">
                        <h1>Encontre o seu perfil steam</h1>
                        <p>
                            Gostaria de ver o background do seu perfil Steam com
                            a melhor resolução? Basta inserir seu ID ou username
                            para encontrar-lo!
                        </p>
                        <div className="flex flex-row items-center space-x-2">
                            <Input
                                type="text"
                                value={userId}
                                onChange={e => setUserId(e.target.value)}
                                disabled={loading}
                            />
                            <Button type="button" onClick={pesquisar}>
                                {loading ? (
                                    <ImSpinner8 className="spinner" />
                                ) : (
                                    <a>Pesquisar</a>
                                )}
                            </Button>
                        </div>
                    </div>
                    <div className="hidden md:block imgSteam">
                        <motion.div
                            drag
                            dragConstraints={{
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                            }}
                        >
                            <div className="flex justify-end img">
                                <Image
                                    src="/img/logo.png"
                                    width={400}
                                    height={400}
                                    priority
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
            {userBackground?.userData[0] && (
                <div className="max-w-6xl mx-auto px-1   -mt-10">
                    <div className="flex w-full grid grid-cols-4 gap-4 transition items-center justify-between">
                        <div className="flex rounded-md border-box">
                            <a>{userBackground?.userData[0].personaname}</a>
                        </div>
                        <div className="flex rounded-md border-box">
                            <a>{userBackground?.userData[0].lastlogoff}</a>
                        </div>
                        <div className="flex rounded-md border-box">
                            {returnStatus(
                                userBackground?.userData[0].personastate,
                            )}
                        </div>
                        <div className="flex rounded-md border-box">
                            <a>{userBackground?.userData[0].realname}</a>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex mx-auto items-center text-center justify-center">
                <AnimateSharedLayout>
                    <motion.div
                        layoutId="1"
                        key="1"
                        style={{
                            visibility: 'hidden',
                        }}
                    ></motion.div>
                    <AnimatePresence>
                        {bool && (
                            <UserWindow
                                user={user}
                                setBool={setBool}
                                userData={userBackground}
                            />
                        )}
                    </AnimatePresence>
                </AnimateSharedLayout>
            </div>
        </Container>
    )
}

export default Home
