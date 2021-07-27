import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Container } from './styles'

interface Props {
    teste?: string
}

const Header: React.FC<Props> = () => {
    return (
        <Container>
            <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="flex justify-center md:justify-between py-6 md:py-4 items-center">
                    <h1 className="space-x-2 items-center">
                        <a>
                            <Image src="/img/logo.png" width={20} height={20} />
                        </a>
                        <a>STEAMBACKGROUND</a>
                    </h1>
                    <nav className="hidden md:block space-x-8">
                        <Link href="https://github.com/Maurelima">
                            <a
                                className="tracking-wide hover:text-gray-300"
                                target="_blank"
                            >
                                GitHub
                            </a>
                        </Link>
                        <Link href="https://www.linkedin.com/in/maurelima/">
                            <a
                                className="tracking-wide hover:text-gray-300"
                                target="_blank"
                            >
                                Linkedin
                            </a>
                        </Link>
                        <Link href="https://www.instagram.com/roguekenobi/">
                            <a
                                className="tracking-wide hover:text-gray-300"
                                target="_blank"
                            >
                                Instagram
                            </a>
                        </Link>
                    </nav>
                </div>
            </div>
        </Container>
    )
}

export default Header
