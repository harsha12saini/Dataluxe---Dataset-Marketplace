import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "./images/dataluxe-logo.jpg";
import "./Navbar.css";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [userAccount, setUserAccount] = useState(null);
  const [isMetaMaskInstalled, setIsMetaMaskInstalled] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.9) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Check if MetaMask is installed
  useEffect(() => {
    if (window.ethereum) {
      setIsMetaMaskInstalled(true);
      // Try to get accounts if already connected
      window.ethereum
        .request({ method: "eth_accounts" })
        .then((accounts) => {
          if (accounts.length > 0) {
            setUserAccount(accounts[0]);
          }
        })
        .catch((err) => {
          console.error("Error fetching accounts:", err);
        });
    } else {
      setIsMetaMaskInstalled(false);
    }
  }, []);

  // Connect MetaMask function
  const connectMetaMask = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask to connect your wallet.");
      return;
    }

    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      setUserAccount(accounts[0]);
    } catch (err) {
      console.error("Error connecting to MetaMask:", err);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="logo-container">
        <img src={logo} alt="DataLuxe Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li
          className="dropdown"
          onMouseEnter={() => setDropdownOpen(true)}
          onMouseLeave={() => setDropdownOpen(false)}
        >
          <a href="/home">Home</a>{/*
          {dropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="#features">Features</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#Contact">Contact</a>
              </li>
            </ul>
          )}*/}
        </li>
        <li>
          <a href="#train-model">Train Models</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
        <Link to="/dashboard">Dashboard</Link>

        </li>
        <li>
          <Link to="/playground">Playground</Link>
        </li>

        {/* MetaMask connect button */}
        <li>
          {isMetaMaskInstalled ? (
            userAccount ? (
              <div className="account-info">
                <button
                  className="connected-button"
                  disabled
                  id="connected-wallet-button"
                  data-theme="light"
                >
                  <span class="flex mr-3 items-center">
                    <svg
                      fill="none"
                      height="33"
                      viewBox="0 0 35 33"
                      width="35"
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-7 w-7"
                    >
                      <g
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width=".25"
                      >
                        <path
                          d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z"
                          fill="#e17726"
                          stroke="#e17726"
                        ></path>
                        <g fill="#e27625" stroke="#e27625">
                          <path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z"></path>
                          <path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z"></path>
                          <path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z"></path>
                          <path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z"></path>
                          <path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z"></path>
                          <path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z"></path>
                          <path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z"></path>
                        </g>
                        <path
                          d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z"
                          fill="#d5bfb2"
                          stroke="#d5bfb2"
                        ></path>
                        <path
                          d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z"
                          fill="#d5bfb2"
                          stroke="#d5bfb2"
                        ></path>
                        <path
                          d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z"
                          fill="#233447"
                          stroke="#233447"
                        ></path>
                        <path
                          d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z"
                          fill="#233447"
                          stroke="#233447"
                        ></path>
                        <path
                          d="m10.8733 28.8721.6495-5.3386-4.13117.1167z"
                          fill="#cc6228"
                          stroke="#cc6228"
                        ></path>
                        <path
                          d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z"
                          fill="#cc6228"
                          stroke="#cc6228"
                        ></path>
                        <path
                          d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z"
                          fill="#cc6228"
                          stroke="#cc6228"
                        ></path>
                        <path
                          d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z"
                          fill="#cc6228"
                          stroke="#cc6228"
                        ></path>
                        <path
                          d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z"
                          fill="#e27525"
                          stroke="#e27525"
                        ></path>
                        <path
                          d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z"
                          fill="#e27525"
                          stroke="#e27525"
                        ></path>
                        <path
                          d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z"
                          fill="#e27525"
                          stroke="#e27525"
                        ></path>
                        <path
                          d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z"
                          fill="#e27525"
                          stroke="#e27525"
                        ></path>
                        <path
                          d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z"
                          fill="#f5841f"
                          stroke="#f5841f"
                        ></path>
                        <path
                          d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z"
                          fill="#f5841f"
                          stroke="#f5841f"
                        ></path>
                        <path
                          d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z"
                          fill="#c0ac9d"
                          stroke="#c0ac9d"
                        ></path>
                        <path
                          d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z"
                          fill="#161616"
                          stroke="#161616"
                        ></path>
                        <path
                          d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z"
                          fill="#763e1a"
                          stroke="#763e1a"
                        ></path>
                        <path
                          d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z"
                          fill="#763e1a"
                          stroke="#763e1a"
                        ></path>
                        <path
                          d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z"
                          fill="#f5841f"
                          stroke="#f5841f"
                        ></path>
                        <path
                          d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z"
                          fill="#f5841f"
                          stroke="#f5841f"
                        ></path>
                        <path
                          d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z"
                          fill="#f5841f"
                          stroke="#f5841f"
                        ></path>
                      </g>
                    </svg>
                  </span>
                  <span> MetaMask Connected</span>
                </button>
              </div>
            ) : (
              <button
                onClick={connectMetaMask}
                id="connect-wallet-button"
                data-theme="light"
              >
                <span class="flex mr-3 items-center">
                  <svg
                    fill="none"
                    height="33"
                    viewBox="0 0 35 33"
                    width="35"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-7 w-7"
                  >
                    <g
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width=".25"
                    >
                      <path
                        d="m32.9582 1-13.1341 9.7183 2.4424-5.72731z"
                        fill="#e17726"
                        stroke="#e17726"
                      ></path>
                      <g fill="#e27625" stroke="#e27625">
                        <path d="m2.66296 1 13.01714 9.809-2.3254-5.81802z"></path>
                        <path d="m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z"></path>
                        <path d="m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z"></path>
                        <path d="m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z"></path>
                        <path d="m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z"></path>
                        <path d="m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z"></path>
                        <path d="m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z"></path>
                      </g>
                      <path
                        d="m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z"
                        fill="#d5bfb2"
                        stroke="#d5bfb2"
                      ></path>
                      <path
                        d="m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z"
                        fill="#d5bfb2"
                        stroke="#d5bfb2"
                      ></path>
                      <path
                        d="m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z"
                        fill="#233447"
                        stroke="#233447"
                      ></path>
                      <path
                        d="m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z"
                        fill="#233447"
                        stroke="#233447"
                      ></path>
                      <path
                        d="m10.8733 28.8721.6495-5.3386-4.13117.1167z"
                        fill="#cc6228"
                        stroke="#cc6228"
                      ></path>
                      <path
                        d="m24.0982 23.5335.6366 5.3386 3.4946-5.2219z"
                        fill="#cc6228"
                        stroke="#cc6228"
                      ></path>
                      <path
                        d="m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z"
                        fill="#cc6228"
                        stroke="#cc6228"
                      ></path>
                      <path
                        d="m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z"
                        fill="#cc6228"
                        stroke="#cc6228"
                      ></path>
                      <path
                        d="m8.392 17.6507 3.1049 6.0513-.1039-3.0062z"
                        fill="#e27525"
                        stroke="#e27525"
                      ></path>
                      <path
                        d="m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z"
                        fill="#e27525"
                        stroke="#e27525"
                      ></path>
                      <path
                        d="m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z"
                        fill="#e27525"
                        stroke="#e27525"
                      ></path>
                      <path
                        d="m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z"
                        fill="#e27525"
                        stroke="#e27525"
                      ></path>
                      <path
                        d="m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z"
                        fill="#f5841f"
                        stroke="#f5841f"
                      ></path>
                      <path
                        d="m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z"
                        fill="#f5841f"
                        stroke="#f5841f"
                      ></path>
                      <path
                        d="m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z"
                        fill="#c0ac9d"
                        stroke="#c0ac9d"
                      ></path>
                      <path
                        d="m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z"
                        fill="#161616"
                        stroke="#161616"
                      ></path>
                      <path
                        d="m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z"
                        fill="#763e1a"
                        stroke="#763e1a"
                      ></path>
                      <path
                        d="m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z"
                        fill="#763e1a"
                        stroke="#763e1a"
                      ></path>
                      <path
                        d="m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z"
                        fill="#f5841f"
                        stroke="#f5841f"
                      ></path>
                      <path
                        d="m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z"
                        fill="#f5841f"
                        stroke="#f5841f"
                      ></path>
                      <path
                        d="m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z"
                        fill="#f5841f"
                        stroke="#f5841f"
                      ></path>
                    </g>
                  </svg>
                </span>
                <span>Connect MetaMask</span>
              </button>
            )
          ) : (
            <div>Please install MetaMask to connect your wallet</div>
          )}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
