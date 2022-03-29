import Image from "next/image";

const BannerAbout = () => {
  return (
    <div className={"banner-about App"}>
      <div className={"container-about"}>
        <div className={"row-about"}>
          <div className={`${"sideImage"} ${"left"}`}>
            <Image alt={"showcase"} src={require(`../public/images/4.jpg`)} />
          </div>
          <div className={"mainText"}>Salon Ashley VIP</div>
          <div className={"mainImage"}>
            <Image alt={"showcase"} src={require(`../public/images/5.jpg`)} />
          </div>
          <div className={`${"sideImage"} ${"right"}`}>
            <Image alt={"showcase"} src={require(`../public/images/3.jpg`)} />
          </div>
        </div>
        <div className={"scroll"}>
          <span>scroll down</span>
        </div>
      </div>
    </div>
  );
};

export default BannerAbout;
