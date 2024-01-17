export default function Navbar() {
    return (
        <nav className="flex w-full rounded-[30px] bg-bgPrimary px-8 py-4 text-sm shadow-lg">
            <ul className="flex justify-between w-full">
                <li>
                        <svg className="flex justify-center w-full" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="36" height="36" viewBox="0 0 59.000000 58.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,58.000000) scale(0.100000,-0.100000)"
                        fill="#fff" stroke="none">
                        <path d="M29 521 c-24 -19 -24 -22 -27 -225 l-3 -206 25 -25 25 -25 244 0
                        c315 0 291 -15 295 187 3 139 2 150 -18 176 l-21 27 -237 2 c-203 3 -237 5
                        -237 18 0 13 34 16 227 20 234 5 254 9 246 46 -3 18 -19 19 -249 22 -231 2
                        -248 1 -270 -17z m482 -267 c9 -11 10 -20 2 -32 -24 -39 -82 -15 -68 28 8 24
                        47 27 66 4z"/>
                        </g>
                        </svg>
                        <h3 className="text-white mt-1">WALLET</h3>
                </li>
                <li>
                        <svg className="flex justify-center w-full" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="36" height="36" viewBox="0 0 58.000000 58.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,58.000000) scale(0.100000,-0.100000)"
                        fill="lightgrey" stroke="none">
                        <path d="M11 526 c-9 -10 -11 -74 -9 -226 l3 -212 28 -24 c28 -24 28 -24 276
                        -24 179 0 250 3 259 12 16 16 15 23 -4 42 -13 14 -51 16 -255 16 l-239 0 0
                        199 c0 110 -3 206 -6 215 -8 20 -38 21 -53 2z"/>
                        <path d="M428 403 l-68 -67 -38 37 c-21 20 -45 37 -53 37 -24 0 -163 -146
                        -156 -164 14 -37 38 -29 98 30 l59 58 38 -37 c21 -20 45 -37 53 -37 8 0 53 38
                        99 85 72 72 83 88 74 103 -20 31 -38 23 -106 -45z"/>
                        </g>
                        </svg>
                        <h3 className="text-white mt-1">MARKET</h3>
                </li>
                <li>
                        <svg className="flex justify-center w-full" version="1.0" xmlns="http://www.w3.org/2000/svg"
                        width="36" height="36" viewBox="0 0 51.000000 58.000000"
                        preserveAspectRatio="xMidYMid meet">
                        <g transform="translate(0.000000,58.000000) scale(0.100000,-0.100000)"
                        fill="lightgrey" stroke="none">
                        <path d="M190 558 c-36 -18 -49 -32 -64 -70 -17 -41 -18 -52 -7 -89 16 -53 48
                        -85 101 -99 116 -31 211 82 162 193 -34 76 -116 104 -192 65z"/>
                        <path d="M112 209 c-53 -27 -87 -70 -102 -132 -20 -79 -24 -78 248 -75 265 3
                        262 3 243 74 -16 61 -51 106 -101 132 -63 32 -224 32 -288 1z"/>
                        </g>
                        </svg>
                        <h3 className="text-white mt-1">PROFILE</h3>
                </li>
            </ul>
        </nav>
    )
}