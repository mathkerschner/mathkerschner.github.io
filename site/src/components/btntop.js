import React from "react"

export default class BtnTop extends React.Component {
    state = { y: 0, display: "hide" };

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    };
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    };
    handleScroll = ev => {
        this.setState({
            y: window.scrollY
        });
        if (this.state.y >= 500) {
            this.setState({ display: "show" })
        } else {
            this.setState({ display: "hide" })
        }
    };
    onTop(e) {
        e.preventDefault();
        window.scrollTo(0, 0);
    };
    render() {
        return (
            <button className={"btntop " + this.state.display} onClick={this.onTop}>
                <svg width="16" height="50" viewBox="0 0 14 59" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)" >
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
            </button>
        )
    }
}




