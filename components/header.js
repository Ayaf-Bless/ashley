import React, { useState, useEffect } from "react";
import Link from "next/link";
import { UpArrow } from "../utils/svg-component";
import { useRouter } from "next/router";
import { closeMenu, openMenu } from "../utils/nemuAnimation";
import { withRouter } from "next/router";

function Header({ dimensions }) {
  const router = useRouter();
  const [menuState, setMenuState] = useState({ menuOpened: false });
  useEffect(() => {
    const handleRouteChange = (url) => {
      console.log(`App is changing to ${url}`);
      setMenuState({ menuOpened: false });
    };

    router.events.on("routeChangeStart", handleRouteChange);

    // If the component is unmounted, unsubscribe
    // from the event with the `off` method:
    if (menuState.menuOpened === true) {
      openMenu(dimensions.width);
    } else if (menuState.menuOpened === false) {
      closeMenu();
    }
    return () => {
      router.events.off("routeChangeStart", handleRouteChange);
    };
  }, [menuState.menuOpened]);
  return (
    <div className={"header"}>
      <div className={"container"}>
        <div className={"row v-center space-between"}>
          <div className={"logo"}>
            <Link href={"/"}>
              <a>Ashley</a>
            </Link>
          </div>
          <div className={"nav-toggle"}>
            <div
              onClick={() => setMenuState({ menuOpened: true })}
              className="hamburger-menu"
            >
              <span />
              <span />
            </div>
            <div
              className="hamburger-menu-close"
              onClick={() => setMenuState({ menuOpened: false })}
            >
              <UpArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default withRouter(Header);
