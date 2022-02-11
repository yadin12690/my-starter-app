import './Pokedex.css'

function Pokedex() {


    return (
        <div id="pokedex-container">
            <div id="pokedex">
                <div id="pokedex-left">
                    <div>
                        <div id="circle1">
                            <div id="light-circle1"></div>
                        </div>
                        <div id="circle2" className="circleRed">
                            <div className="light-circle2" id="light-circle2Red"></div>
                        </div>
                        <div id="circle2" className="circleYellow">
                            <div className="light-circle2" id="light-circle2Yellow"></div>
                        </div>
                        <div id="circle2" className="circleGreen">
                            <div className="light-circle2" id="light-circle2Green"></div>
                        </div>
                    </div>
                    <div id="screen-row">
                        <div id="screen-border">
                            <div id="top-screen-decoration">
                                <div id="circle3" style={{ marginRight: '20px' }}></div>
                                <div id="circle3" style={{ marginLeft: '20px' }}></div>
                            </div>
                            <div id="screen">
                                <div id="picture-row">
                                    <img id="picture" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" />
                                </div>
                                <div id="screen-row-info">
                                    <div id="number-pokemon">001</div>
                                    <div id="gender-container">
                                        <svg id="male-icon" className="gender-icon gender-active svg-inline--fa fa-mars fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="mars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path fill="currentColor" d="M372 64h-79c-10.7 0-16 12.9-8.5 20.5l16.9 16.9-80.7 80.7c-22.2-14-48.5-22.1-76.7-22.1C64.5 160 0 224.5 0 304s64.5 144 144 144 144-64.5 144-144c0-28.2-8.1-54.5-22.1-76.7l80.7-80.7 16.9 16.9c7.6 7.6 20.5 2.2 20.5-8.5V76c0-6.6-5.4-12-12-12zM144 384c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"></path></svg>
                                        <svg id="female-icon" className="gender-icon svg-inline--fa fa-venus fa-w-9" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="venus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 288 512"><path fill="currentColor" d="M288 176c0-79.5-64.5-144-144-144S0 96.5 0 176c0 68.5 47.9 125.9 112 140.4V368H76c-6.6 0-12 5.4-12 12v40c0 6.6 5.4 12 12 12h36v36c0 6.6 5.4 12 12 12h40c6.6 0 12-5.4 12-12v-36h36c6.6 0 12-5.4 12-12v-40c0-6.6-5.4-12-12-12h-36v-51.6c64.1-14.5 112-71.9 112-140.4zm-224 0c0-44.1 35.9-80 80-80s80 35.9 80 80-35.9 80-80 80-80-35.9-80-80z"></path></svg>
                                    </div>
                                </div>
                            </div>
                            <div id="bottom-screen-decoration">
                                <div id="circle4"></div>
                                <div id="menu-button">
                                    <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <line y1="0.5" x2="22" y2="0.5" stroke="black" />
                                        <line y1="15.5" x2="22" y2="15.5" stroke="black" />
                                        <line y1="10.5" x2="22" y2="10.5" stroke="black" />
                                        <line y1="5.5" x2="22" y2="5.5" stroke="black" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="name-row">
                        <div id="name-container">
                            <div id="name-screen">
                                Ditto
                            </div>
                            <div id="buttons-container">
                                <div id="button-red">
                                    <div id="light-button-red" className="light on"></div>
                                </div>
                                <div id="button-blue">
                                    <div id="light-button-blue" className="light off"></div>
                                </div>
                            </div>
                            <div id="arrows-container">
                                <div id="cross">
                                    <div id="leftcross">
                                        <div id="leftT"></div>
                                    </div>
                                    <div id="topcross">
                                        <div id="upT"></div>
                                    </div>
                                    <div id="rightcross">
                                        <div id="rightT"></div>
                                    </div>
                                    <div id="midcross">
                                        <div id="midCircle"></div>
                                    </div>
                                    <div id="botcross">
                                        <div id="downT"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="pokedex-right">
                    <div id="screen-description-row">
                        <div id="screen-description"></div>
                    </div>

                    <div id="decoration-buttons">
                        <div id="deco-button"></div>
                        <div id="deco-button"></div>
                    </div>
                    <div id="types-row">
                        <div id="types-container">
                            <div id="type-box" style={{ borderRight: 'none"' }}>
                                <img id="type1" className="type-pokemon" src="https://cdn2.bulbagarden.net/upload/7/74/GrassIC_Big.png" />
                            </div>
                            <div id="type-box">
                                <img id="type2" className="type-pokemon" src="https://cdn2.bulbagarden.net/upload/3/3d/PoisonIC_Big.png" />
                            </div>
                        </div>
                        <div id="deco-light"></div>
                    </div>
                    <div id="extra-info-pokemon-row">
                        <div className="extra-info-screen" id="extra-info-screen-1">Height: 7</div>
                        <div className="extra-info-screen" id="extra-info-screen-2">Weight: 69</div>
                    </div>
                </div>
                <svg id="mid-cilinder" width="54" height="456" viewBox="0 0 54 456" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_250_2)">
                        <path d="M4 3.70732C4 3.70732 17.8401 0 27 0C36.1599 0 50 3.70732 50 3.70732V444.878C50 444.878 36.1599 441.171 27 441.171C17.8401 441.171 4 444.878 4 444.878V3.70732Z" fill="#DC0A2D" />
                        <path d="M49 4.48123V443.589C48.6919 443.513 48.3328 443.424 47.9289 443.327C46.4789 442.977 44.45 442.511 42.1323 442.044C37.5151 441.115 31.6843 440.171 27 440.171C22.3157 440.171 16.4849 441.115 11.8677 442.044C9.55003 442.511 7.52106 442.977 6.07111 443.327C5.66722 443.424 5.30809 443.513 5 443.589V4.48122C5.38364 4.38368 5.90543 4.25329 6.54016 4.10016C7.97147 3.75485 9.975 3.29436 12.2623 2.834C16.8552 1.90961 22.5243 1 27 1C31.4757 1 37.1448 1.90961 41.7377 2.834C44.025 3.29436 46.0285 3.75485 47.4598 4.10016C48.0946 4.25329 48.6164 4.38368 49 4.48123Z" stroke="black" strokeWidth="2" />
                    </g>
                    <path d="M6.29999 64.8781C6.29999 64.8781 18.8664 63.0244 27 63.0244C35.1336 63.0244 47.7 64.8781 47.7 64.8781" stroke="black" strokeWidth="2" />
                    <path d="M6.29999 72.2927C6.29999 72.2927 18.8664 70.439 27 70.439C35.1336 70.439 47.7 72.2927 47.7 72.2927" stroke="black" strokeWidth="2" />
                    <path d="M6.29999 368.878C6.29999 368.878 18.8664 367.024 27 367.024C35.1336 367.024 47.7 368.878 47.7 368.878" stroke="black" strokeWidth="2" />
                    <path d="M6.29999 376.293C6.29999 376.293 18.8664 374.439 27 374.439C35.1336 374.439 47.7 376.293 47.7 376.293" stroke="black" strokeWidth="2" />
                    <mask id="path-7-inside-1_250_2" fill="white">
                        <path d="M50 444.878C50 441.928 47.5768 439.099 43.2635 437.014C38.9501 434.928 33.1 433.756 27 433.756C20.9 433.756 15.0499 434.928 10.7365 437.014C6.42321 439.099 4 441.928 4 444.878L27 444.878H50Z" />
                    </mask>
                    <path d="M50 444.878C50 441.928 47.5768 439.099 43.2635 437.014C38.9501 434.928 33.1 433.756 27 433.756C20.9 433.756 15.0499 434.928 10.7365 437.014C6.42321 439.099 4 441.928 4 444.878L27 444.878H50Z" fill="#89061C" stroke="black" strokeWidth="4" mask="url(#path-7-inside-1_250_2)" />
                    <defs>
                        <filter id="filter0_d_250_2" x="0" y="0" width="54" height="452.878" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dy="4" />
                            <feGaussianBlur stdDeviation="2" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_250_2" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_250_2" result="shape" />
                        </filter>
                    </defs>
                </svg>
            </div>
        </div>
    )
}

export default Pokedex
