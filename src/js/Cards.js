import trueDate from "../assets/img/svg/truedate.svg";
import trueImg from "../assets/img/svg/true-img.svg";
import last from "../assets/img/png/last.png";
import girl from "../assets/img/png/girl.png";
import man from "../assets/img/png/man.png";
import arivu from "../assets/img/svg/arivu.svg";
import assets from "../assets/img/svg/assets.svg";
import assetfort from "../assets/img/png/assetsfort.png";
import joosh from "../assets/img/svg/zoosh.svg";
import easy from "../assets/img/svg/easy.svg";
import reforce from "../assets/img/svg/reforce.svg";
import reforce1 from "../assets/img/png/reforce.png";
import software from "../assets/img/svg/software.svg";
import eco from "../assets/img/svg/eco.svg";
import globe from "../assets/img/svg/globe.svg";
import indestry from "../assets/img/svg/indestry.svg";
import moon from "../assets/img/png/yellow-moon.png";
import clr_line from "../assets/img/png/colored-lines.png";
import orange_img from "../assets/img/png/like-moon.png";
import cup_img from "../assets/img/png/cup.png";
import half_circle from "../assets/img/png/yellow-oval.png";
import leaf from "../assets/img/png/leaf.png";
import leaf2 from "../assets/img/png/small-leaf.png";
import ice from "../assets/img/png/ice.png";

const Cards = [
  {
    icon: trueDate,
    head: "Data Unifying & Analytics Platform",
    para: "Basecamp software to automate the collation, cleaning, integrating and visualising for all of your businesses market facing sales data across all channels.",
    img: trueImg,
    cls: "cards_border1 ",
    translatey: "translatey",
    scale: "scale_img",
    moon: moon,
    img_posi2: "d_none",
    img_posi: "yellow_moon",
    img_posi3: "d_none",
    img_posi4: "d_none",
    img_posi5: "d_none",
  },
  {
    icon: reforce,
    head: "Field Sales Automation Software",
    para: "Provides superior field sales routing capability, retail execution management and sales order integration for mobile workforces within businesses.",
    img: reforce1,
    cls: "cards_border2",
    img_posi: "d_none",
    img_posi2: "d_none",
    img_posi3: "d_none",
    img_posi4: "d_none",
    img_posi5: "d_none",
  },
  {
    icon: assets,
    head: "Facility & Maintenance Management Software",
    para: "Web and mobile-based CMMS software that offers asset management, downtime tracking & workflow automation solutions of businesses.",
    img: assetfort,
    img_posi: "d_none",
    img_posi2: "d_none",
    cls: "cards_border3",
    img_posi3: "d_none",
    img_posi4: "d_none",
    img_posi5: "d_none",
  },
  {
    icon: easy,
    head: "HR Management Software",
    para: "Human resource software solution that combines several systems and processes to manage and optimize daily HR tasks and the overall HR goals of a given organization.",
    img: man,
    cls: "cards_border4",
    scale: "scale_img",
    moon: clr_line,
    img_posi: "clr_line_position",
    img_posi2: "orange_img_posi",
    orange: orange_img,
    img_posi3: "d_none",
    img_posi4: "d_none",
    img_posi5: "d_none",
  },
  {
    icon: joosh,
    head: "Gig Economy for Activations",
    para: "Interconnected ecosystem for promotions management. Where  ",
    text: "brands and agencies promote products and capture consumer",
    span: "feedback and behaviour.",
    img: girl,
    cls: "cards_border5",
    img_posi: "clr_line_position orange_position",
    img_posi2: "d_none",
    img_posi3: "leaf_img ",
    img_posi4: "small_leaf_img",
    img_posi5: "ice_cube_img",
    moon: cup_img,
    leaf: leaf,
    leaf2: leaf2,
    ice: ice,
  },
  {
    icon: arivu,
    head: "Learning Management Software",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: last,
    cls: "cards_border6",
    scale: "scale_img p_3",
    img_posi: "clr_line_position ovel_position",
    img_posi2: "d_none",
    img_posi3: "d_none",
    img_posi4: "d_none",
    img_posi5: "d_none",
    moon: half_circle,
  },
];

export default Cards;

export const system = [
  {
    logo: software,
    heading: "B2B Software",
    about:
      "Our products are the forefront of the industry, creating streamlined processing for your business needs.",
  },
  {
    logo: eco,
    heading: "Eco-system Ownership",
    about:
      "We provide ourselves on making our products easy to use and personalised for your business needs.",
    spacing: "translate_y mt_custom",
  },
  {
    logo: globe,
    heading: "Globally Relevant",
    about:
      "All our software if fit for purpose and easy to scale across your organisation in any country.",
    spacing: "",
  },
  {
    logo: indestry,
    heading: "Industry Specific",
    about:
      "Our products are predominately tailored for a specific vertical or industry. We empower domain experts, to ensure you the best results.",
    spacing: "mt_custom translate_y",
  },
];
