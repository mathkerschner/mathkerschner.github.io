import React from "react"

const HeroArea = (props) => (
    <div id="heroarea" className="container-fluid">
        <div className="row justify-content-center mb-30">
            <div className="col-sm-8 col-lg-6 col-md-6 col-xl-6">
                <h2 className="title-first mb-80">
                    {props.herotext}
                </h2>
                <svg width="14" height="59" viewBox="0 0 14 59" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.00002 0H8.00002V50H6.00002V0Z" fill="url(#paint0_linear)" />
                    <path d="M7.00001 59L0.0718079 48.5H13.9282L7.00001 59Z" fill="url(#paint1_linear)" />
                    <defs>
                        <linearGradient id="paint0_linear" x1="-0.129579" y1="58.1896" x2="26.7302" y2="51.5146"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0.2" stopColor="#F39C12" />
                            <stop offset="0.96" stopColor="#FF0061" />
                        </linearGradient>
                        <linearGradient id="paint1_linear" x1="-0.129579" y1="58.1896" x2="26.7302" y2="51.5146"
                            gradientUnits="userSpaceOnUse">
                            <stop offset="0.2" stopColor="#F39C12" />
                            <stop offset="0.96" stopColor="#FF0061" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    </div>
)
export default HeroArea