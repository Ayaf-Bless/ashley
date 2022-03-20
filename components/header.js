import React from "react";
import Link from "next/link";

function Header(props) {
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
            <div className={"hamburger-menu"}>
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
