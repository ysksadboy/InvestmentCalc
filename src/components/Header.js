import logo from '../assets/investment-calculator-logo.png';

function Header() {
    return (
        <div>
            <header className="header">
                <img src={logo} alt="logo" />
                <div>
                    <h1>Andrew's</h1>
                </div>
                <h1>Investment Calculator</h1>
            </header>

        </div>
    )
}

export default Header
