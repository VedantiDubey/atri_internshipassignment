import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex219Cb, useFlex217Cb, useFlex218Cb, useFlex225Cb, useFlex224Cb, useFlex240Cb, useFlex242Cb, useFlex244Cb, useFlex245Cb, useFlex243Cb, useFlex247Cb, useFlex248Cb, useFlex246Cb, useFlex250Cb, useFlex249Cb, useFlex270Cb, useFlex268Cb, useFlex264Cb, useFlex265Cb, useFlex266Cb, useFlex275Cb, useFlex274Cb, useFlex271Cb, useFlex272Cb, useFlex273Cb, useFlex294Cb, useFlex291Cb, useFlex292Cb, useFlex293Cb, useFlex282Cb, useFlex280Cb, useFlex278Cb, useFlex281Cb, useFlex279Cb, useFlex276Cb, useFlex277Cb, useFlex290Cb, useFlex286Cb, useFlex287Cb, useFlex285Cb, useFlex283Cb, useFlex284Cb, useFlex288Cb, useFlex289Cb, useFlex300Cb, useFlex298Cb, useFlex299Cb, useImage102Cb, useTextBox238Cb, useTextBox239Cb, useFlex223Cb, useImage104Cb, useImage113Cb, useTextBox251Cb, useTextBox253Cb, useTextBox254Cb, useButton37Cb, useImage114Cb, useButton38Cb, useTextBox255Cb, useTextBox256Cb, useTextBox257Cb, useImage115Cb, useImage116Cb, useImage117Cb, useImage118Cb, useTextBox258Cb, useTextBox283Cb, useTextBox284Cb, useTextBox277Cb, useTextBox278Cb, useImage124Cb, useTextBox285Cb, useTextBox279Cb, useTextBox280Cb, useImage125Cb, useTextBox286Cb, useTextBox281Cb, useTextBox282Cb, useImage126Cb, useTextBox287Cb, useTextBox297Cb, useImage127Cb, useTextBox289Cb, useTextBox290Cb, useImage128Cb, useTextBox292Cb, useTextBox293Cb, useImage129Cb, useTextBox295Cb, useTextBox296Cb, useTextBox319Cb, useTextBox320Cb, useImage141Cb, useTextBox322Cb, useTextBox323Cb, useImage142Cb, useTextBox325Cb, useTextBox326Cb, useImage143Cb, useTextBox300Cb, useTextBox299Cb, useImage134Cb, useImage135Cb, useImage130Cb, useImage131Cb, useImage132Cb, useImage133Cb, useTextBox302Cb, useTextBox303Cb, useTextBox304Cb, useTextBox305Cb, useTextBox306Cb, useTextBox307Cb, useTextBox308Cb, useTextBox309Cb, useTextBox301Cb, useImage136Cb, useImage137Cb, useImage138Cb, useImage139Cb, useTextBox310Cb, useTextBox311Cb, useTextBox312Cb, useTextBox313Cb, useTextBox314Cb, useTextBox315Cb, useTextBox316Cb, useTextBox317Cb, useTextBox318Cb, useImage179Cb, useTextBox396Cb, useButton41Cb, useButton42Cb, useTextBox333Cb, useTextBox334Cb, useTextBox335Cb, useTextBox336Cb, useTextBox337Cb, useTextBox397Cb } from "../page-cbs/about";
import "../page-css/about.css";
import "../custom/about";

export default function About() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex219Props = useStore((state)=>state["about"]["Flex219"]);
const Flex219IoProps = useIoStore((state)=>state["about"]["Flex219"]);
const Flex219Cb = useFlex219Cb()
const Flex217Props = useStore((state)=>state["about"]["Flex217"]);
const Flex217IoProps = useIoStore((state)=>state["about"]["Flex217"]);
const Flex217Cb = useFlex217Cb()
const Flex218Props = useStore((state)=>state["about"]["Flex218"]);
const Flex218IoProps = useIoStore((state)=>state["about"]["Flex218"]);
const Flex218Cb = useFlex218Cb()
const Flex225Props = useStore((state)=>state["about"]["Flex225"]);
const Flex225IoProps = useIoStore((state)=>state["about"]["Flex225"]);
const Flex225Cb = useFlex225Cb()
const Flex224Props = useStore((state)=>state["about"]["Flex224"]);
const Flex224IoProps = useIoStore((state)=>state["about"]["Flex224"]);
const Flex224Cb = useFlex224Cb()
const Flex240Props = useStore((state)=>state["about"]["Flex240"]);
const Flex240IoProps = useIoStore((state)=>state["about"]["Flex240"]);
const Flex240Cb = useFlex240Cb()
const Flex242Props = useStore((state)=>state["about"]["Flex242"]);
const Flex242IoProps = useIoStore((state)=>state["about"]["Flex242"]);
const Flex242Cb = useFlex242Cb()
const Flex244Props = useStore((state)=>state["about"]["Flex244"]);
const Flex244IoProps = useIoStore((state)=>state["about"]["Flex244"]);
const Flex244Cb = useFlex244Cb()
const Flex245Props = useStore((state)=>state["about"]["Flex245"]);
const Flex245IoProps = useIoStore((state)=>state["about"]["Flex245"]);
const Flex245Cb = useFlex245Cb()
const Flex243Props = useStore((state)=>state["about"]["Flex243"]);
const Flex243IoProps = useIoStore((state)=>state["about"]["Flex243"]);
const Flex243Cb = useFlex243Cb()
const Flex247Props = useStore((state)=>state["about"]["Flex247"]);
const Flex247IoProps = useIoStore((state)=>state["about"]["Flex247"]);
const Flex247Cb = useFlex247Cb()
const Flex248Props = useStore((state)=>state["about"]["Flex248"]);
const Flex248IoProps = useIoStore((state)=>state["about"]["Flex248"]);
const Flex248Cb = useFlex248Cb()
const Flex246Props = useStore((state)=>state["about"]["Flex246"]);
const Flex246IoProps = useIoStore((state)=>state["about"]["Flex246"]);
const Flex246Cb = useFlex246Cb()
const Flex250Props = useStore((state)=>state["about"]["Flex250"]);
const Flex250IoProps = useIoStore((state)=>state["about"]["Flex250"]);
const Flex250Cb = useFlex250Cb()
const Flex249Props = useStore((state)=>state["about"]["Flex249"]);
const Flex249IoProps = useIoStore((state)=>state["about"]["Flex249"]);
const Flex249Cb = useFlex249Cb()
const Flex270Props = useStore((state)=>state["about"]["Flex270"]);
const Flex270IoProps = useIoStore((state)=>state["about"]["Flex270"]);
const Flex270Cb = useFlex270Cb()
const Flex268Props = useStore((state)=>state["about"]["Flex268"]);
const Flex268IoProps = useIoStore((state)=>state["about"]["Flex268"]);
const Flex268Cb = useFlex268Cb()
const Flex264Props = useStore((state)=>state["about"]["Flex264"]);
const Flex264IoProps = useIoStore((state)=>state["about"]["Flex264"]);
const Flex264Cb = useFlex264Cb()
const Flex265Props = useStore((state)=>state["about"]["Flex265"]);
const Flex265IoProps = useIoStore((state)=>state["about"]["Flex265"]);
const Flex265Cb = useFlex265Cb()
const Flex266Props = useStore((state)=>state["about"]["Flex266"]);
const Flex266IoProps = useIoStore((state)=>state["about"]["Flex266"]);
const Flex266Cb = useFlex266Cb()
const Flex275Props = useStore((state)=>state["about"]["Flex275"]);
const Flex275IoProps = useIoStore((state)=>state["about"]["Flex275"]);
const Flex275Cb = useFlex275Cb()
const Flex274Props = useStore((state)=>state["about"]["Flex274"]);
const Flex274IoProps = useIoStore((state)=>state["about"]["Flex274"]);
const Flex274Cb = useFlex274Cb()
const Flex271Props = useStore((state)=>state["about"]["Flex271"]);
const Flex271IoProps = useIoStore((state)=>state["about"]["Flex271"]);
const Flex271Cb = useFlex271Cb()
const Flex272Props = useStore((state)=>state["about"]["Flex272"]);
const Flex272IoProps = useIoStore((state)=>state["about"]["Flex272"]);
const Flex272Cb = useFlex272Cb()
const Flex273Props = useStore((state)=>state["about"]["Flex273"]);
const Flex273IoProps = useIoStore((state)=>state["about"]["Flex273"]);
const Flex273Cb = useFlex273Cb()
const Flex294Props = useStore((state)=>state["about"]["Flex294"]);
const Flex294IoProps = useIoStore((state)=>state["about"]["Flex294"]);
const Flex294Cb = useFlex294Cb()
const Flex291Props = useStore((state)=>state["about"]["Flex291"]);
const Flex291IoProps = useIoStore((state)=>state["about"]["Flex291"]);
const Flex291Cb = useFlex291Cb()
const Flex292Props = useStore((state)=>state["about"]["Flex292"]);
const Flex292IoProps = useIoStore((state)=>state["about"]["Flex292"]);
const Flex292Cb = useFlex292Cb()
const Flex293Props = useStore((state)=>state["about"]["Flex293"]);
const Flex293IoProps = useIoStore((state)=>state["about"]["Flex293"]);
const Flex293Cb = useFlex293Cb()
const Flex282Props = useStore((state)=>state["about"]["Flex282"]);
const Flex282IoProps = useIoStore((state)=>state["about"]["Flex282"]);
const Flex282Cb = useFlex282Cb()
const Flex280Props = useStore((state)=>state["about"]["Flex280"]);
const Flex280IoProps = useIoStore((state)=>state["about"]["Flex280"]);
const Flex280Cb = useFlex280Cb()
const Flex278Props = useStore((state)=>state["about"]["Flex278"]);
const Flex278IoProps = useIoStore((state)=>state["about"]["Flex278"]);
const Flex278Cb = useFlex278Cb()
const Flex281Props = useStore((state)=>state["about"]["Flex281"]);
const Flex281IoProps = useIoStore((state)=>state["about"]["Flex281"]);
const Flex281Cb = useFlex281Cb()
const Flex279Props = useStore((state)=>state["about"]["Flex279"]);
const Flex279IoProps = useIoStore((state)=>state["about"]["Flex279"]);
const Flex279Cb = useFlex279Cb()
const Flex276Props = useStore((state)=>state["about"]["Flex276"]);
const Flex276IoProps = useIoStore((state)=>state["about"]["Flex276"]);
const Flex276Cb = useFlex276Cb()
const Flex277Props = useStore((state)=>state["about"]["Flex277"]);
const Flex277IoProps = useIoStore((state)=>state["about"]["Flex277"]);
const Flex277Cb = useFlex277Cb()
const Flex290Props = useStore((state)=>state["about"]["Flex290"]);
const Flex290IoProps = useIoStore((state)=>state["about"]["Flex290"]);
const Flex290Cb = useFlex290Cb()
const Flex286Props = useStore((state)=>state["about"]["Flex286"]);
const Flex286IoProps = useIoStore((state)=>state["about"]["Flex286"]);
const Flex286Cb = useFlex286Cb()
const Flex287Props = useStore((state)=>state["about"]["Flex287"]);
const Flex287IoProps = useIoStore((state)=>state["about"]["Flex287"]);
const Flex287Cb = useFlex287Cb()
const Flex285Props = useStore((state)=>state["about"]["Flex285"]);
const Flex285IoProps = useIoStore((state)=>state["about"]["Flex285"]);
const Flex285Cb = useFlex285Cb()
const Flex283Props = useStore((state)=>state["about"]["Flex283"]);
const Flex283IoProps = useIoStore((state)=>state["about"]["Flex283"]);
const Flex283Cb = useFlex283Cb()
const Flex284Props = useStore((state)=>state["about"]["Flex284"]);
const Flex284IoProps = useIoStore((state)=>state["about"]["Flex284"]);
const Flex284Cb = useFlex284Cb()
const Flex288Props = useStore((state)=>state["about"]["Flex288"]);
const Flex288IoProps = useIoStore((state)=>state["about"]["Flex288"]);
const Flex288Cb = useFlex288Cb()
const Flex289Props = useStore((state)=>state["about"]["Flex289"]);
const Flex289IoProps = useIoStore((state)=>state["about"]["Flex289"]);
const Flex289Cb = useFlex289Cb()
const Flex300Props = useStore((state)=>state["about"]["Flex300"]);
const Flex300IoProps = useIoStore((state)=>state["about"]["Flex300"]);
const Flex300Cb = useFlex300Cb()
const Flex298Props = useStore((state)=>state["about"]["Flex298"]);
const Flex298IoProps = useIoStore((state)=>state["about"]["Flex298"]);
const Flex298Cb = useFlex298Cb()
const Flex299Props = useStore((state)=>state["about"]["Flex299"]);
const Flex299IoProps = useIoStore((state)=>state["about"]["Flex299"]);
const Flex299Cb = useFlex299Cb()
const Image102Props = useStore((state)=>state["about"]["Image102"]);
const Image102IoProps = useIoStore((state)=>state["about"]["Image102"]);
const Image102Cb = useImage102Cb()
const TextBox238Props = useStore((state)=>state["about"]["TextBox238"]);
const TextBox238IoProps = useIoStore((state)=>state["about"]["TextBox238"]);
const TextBox238Cb = useTextBox238Cb()
const TextBox239Props = useStore((state)=>state["about"]["TextBox239"]);
const TextBox239IoProps = useIoStore((state)=>state["about"]["TextBox239"]);
const TextBox239Cb = useTextBox239Cb()
const Flex223Props = useStore((state)=>state["about"]["Flex223"]);
const Flex223IoProps = useIoStore((state)=>state["about"]["Flex223"]);
const Flex223Cb = useFlex223Cb()
const Image104Props = useStore((state)=>state["about"]["Image104"]);
const Image104IoProps = useIoStore((state)=>state["about"]["Image104"]);
const Image104Cb = useImage104Cb()
const Image113Props = useStore((state)=>state["about"]["Image113"]);
const Image113IoProps = useIoStore((state)=>state["about"]["Image113"]);
const Image113Cb = useImage113Cb()
const TextBox251Props = useStore((state)=>state["about"]["TextBox251"]);
const TextBox251IoProps = useIoStore((state)=>state["about"]["TextBox251"]);
const TextBox251Cb = useTextBox251Cb()
const TextBox253Props = useStore((state)=>state["about"]["TextBox253"]);
const TextBox253IoProps = useIoStore((state)=>state["about"]["TextBox253"]);
const TextBox253Cb = useTextBox253Cb()
const TextBox254Props = useStore((state)=>state["about"]["TextBox254"]);
const TextBox254IoProps = useIoStore((state)=>state["about"]["TextBox254"]);
const TextBox254Cb = useTextBox254Cb()
const Button37Props = useStore((state)=>state["about"]["Button37"]);
const Button37IoProps = useIoStore((state)=>state["about"]["Button37"]);
const Button37Cb = useButton37Cb()
const Image114Props = useStore((state)=>state["about"]["Image114"]);
const Image114IoProps = useIoStore((state)=>state["about"]["Image114"]);
const Image114Cb = useImage114Cb()
const Button38Props = useStore((state)=>state["about"]["Button38"]);
const Button38IoProps = useIoStore((state)=>state["about"]["Button38"]);
const Button38Cb = useButton38Cb()
const TextBox255Props = useStore((state)=>state["about"]["TextBox255"]);
const TextBox255IoProps = useIoStore((state)=>state["about"]["TextBox255"]);
const TextBox255Cb = useTextBox255Cb()
const TextBox256Props = useStore((state)=>state["about"]["TextBox256"]);
const TextBox256IoProps = useIoStore((state)=>state["about"]["TextBox256"]);
const TextBox256Cb = useTextBox256Cb()
const TextBox257Props = useStore((state)=>state["about"]["TextBox257"]);
const TextBox257IoProps = useIoStore((state)=>state["about"]["TextBox257"]);
const TextBox257Cb = useTextBox257Cb()
const Image115Props = useStore((state)=>state["about"]["Image115"]);
const Image115IoProps = useIoStore((state)=>state["about"]["Image115"]);
const Image115Cb = useImage115Cb()
const Image116Props = useStore((state)=>state["about"]["Image116"]);
const Image116IoProps = useIoStore((state)=>state["about"]["Image116"]);
const Image116Cb = useImage116Cb()
const Image117Props = useStore((state)=>state["about"]["Image117"]);
const Image117IoProps = useIoStore((state)=>state["about"]["Image117"]);
const Image117Cb = useImage117Cb()
const Image118Props = useStore((state)=>state["about"]["Image118"]);
const Image118IoProps = useIoStore((state)=>state["about"]["Image118"]);
const Image118Cb = useImage118Cb()
const TextBox258Props = useStore((state)=>state["about"]["TextBox258"]);
const TextBox258IoProps = useIoStore((state)=>state["about"]["TextBox258"]);
const TextBox258Cb = useTextBox258Cb()
const TextBox283Props = useStore((state)=>state["about"]["TextBox283"]);
const TextBox283IoProps = useIoStore((state)=>state["about"]["TextBox283"]);
const TextBox283Cb = useTextBox283Cb()
const TextBox284Props = useStore((state)=>state["about"]["TextBox284"]);
const TextBox284IoProps = useIoStore((state)=>state["about"]["TextBox284"]);
const TextBox284Cb = useTextBox284Cb()
const TextBox277Props = useStore((state)=>state["about"]["TextBox277"]);
const TextBox277IoProps = useIoStore((state)=>state["about"]["TextBox277"]);
const TextBox277Cb = useTextBox277Cb()
const TextBox278Props = useStore((state)=>state["about"]["TextBox278"]);
const TextBox278IoProps = useIoStore((state)=>state["about"]["TextBox278"]);
const TextBox278Cb = useTextBox278Cb()
const Image124Props = useStore((state)=>state["about"]["Image124"]);
const Image124IoProps = useIoStore((state)=>state["about"]["Image124"]);
const Image124Cb = useImage124Cb()
const TextBox285Props = useStore((state)=>state["about"]["TextBox285"]);
const TextBox285IoProps = useIoStore((state)=>state["about"]["TextBox285"]);
const TextBox285Cb = useTextBox285Cb()
const TextBox279Props = useStore((state)=>state["about"]["TextBox279"]);
const TextBox279IoProps = useIoStore((state)=>state["about"]["TextBox279"]);
const TextBox279Cb = useTextBox279Cb()
const TextBox280Props = useStore((state)=>state["about"]["TextBox280"]);
const TextBox280IoProps = useIoStore((state)=>state["about"]["TextBox280"]);
const TextBox280Cb = useTextBox280Cb()
const Image125Props = useStore((state)=>state["about"]["Image125"]);
const Image125IoProps = useIoStore((state)=>state["about"]["Image125"]);
const Image125Cb = useImage125Cb()
const TextBox286Props = useStore((state)=>state["about"]["TextBox286"]);
const TextBox286IoProps = useIoStore((state)=>state["about"]["TextBox286"]);
const TextBox286Cb = useTextBox286Cb()
const TextBox281Props = useStore((state)=>state["about"]["TextBox281"]);
const TextBox281IoProps = useIoStore((state)=>state["about"]["TextBox281"]);
const TextBox281Cb = useTextBox281Cb()
const TextBox282Props = useStore((state)=>state["about"]["TextBox282"]);
const TextBox282IoProps = useIoStore((state)=>state["about"]["TextBox282"]);
const TextBox282Cb = useTextBox282Cb()
const Image126Props = useStore((state)=>state["about"]["Image126"]);
const Image126IoProps = useIoStore((state)=>state["about"]["Image126"]);
const Image126Cb = useImage126Cb()
const TextBox287Props = useStore((state)=>state["about"]["TextBox287"]);
const TextBox287IoProps = useIoStore((state)=>state["about"]["TextBox287"]);
const TextBox287Cb = useTextBox287Cb()
const TextBox297Props = useStore((state)=>state["about"]["TextBox297"]);
const TextBox297IoProps = useIoStore((state)=>state["about"]["TextBox297"]);
const TextBox297Cb = useTextBox297Cb()
const Image127Props = useStore((state)=>state["about"]["Image127"]);
const Image127IoProps = useIoStore((state)=>state["about"]["Image127"]);
const Image127Cb = useImage127Cb()
const TextBox289Props = useStore((state)=>state["about"]["TextBox289"]);
const TextBox289IoProps = useIoStore((state)=>state["about"]["TextBox289"]);
const TextBox289Cb = useTextBox289Cb()
const TextBox290Props = useStore((state)=>state["about"]["TextBox290"]);
const TextBox290IoProps = useIoStore((state)=>state["about"]["TextBox290"]);
const TextBox290Cb = useTextBox290Cb()
const Image128Props = useStore((state)=>state["about"]["Image128"]);
const Image128IoProps = useIoStore((state)=>state["about"]["Image128"]);
const Image128Cb = useImage128Cb()
const TextBox292Props = useStore((state)=>state["about"]["TextBox292"]);
const TextBox292IoProps = useIoStore((state)=>state["about"]["TextBox292"]);
const TextBox292Cb = useTextBox292Cb()
const TextBox293Props = useStore((state)=>state["about"]["TextBox293"]);
const TextBox293IoProps = useIoStore((state)=>state["about"]["TextBox293"]);
const TextBox293Cb = useTextBox293Cb()
const Image129Props = useStore((state)=>state["about"]["Image129"]);
const Image129IoProps = useIoStore((state)=>state["about"]["Image129"]);
const Image129Cb = useImage129Cb()
const TextBox295Props = useStore((state)=>state["about"]["TextBox295"]);
const TextBox295IoProps = useIoStore((state)=>state["about"]["TextBox295"]);
const TextBox295Cb = useTextBox295Cb()
const TextBox296Props = useStore((state)=>state["about"]["TextBox296"]);
const TextBox296IoProps = useIoStore((state)=>state["about"]["TextBox296"]);
const TextBox296Cb = useTextBox296Cb()
const TextBox319Props = useStore((state)=>state["about"]["TextBox319"]);
const TextBox319IoProps = useIoStore((state)=>state["about"]["TextBox319"]);
const TextBox319Cb = useTextBox319Cb()
const TextBox320Props = useStore((state)=>state["about"]["TextBox320"]);
const TextBox320IoProps = useIoStore((state)=>state["about"]["TextBox320"]);
const TextBox320Cb = useTextBox320Cb()
const Image141Props = useStore((state)=>state["about"]["Image141"]);
const Image141IoProps = useIoStore((state)=>state["about"]["Image141"]);
const Image141Cb = useImage141Cb()
const TextBox322Props = useStore((state)=>state["about"]["TextBox322"]);
const TextBox322IoProps = useIoStore((state)=>state["about"]["TextBox322"]);
const TextBox322Cb = useTextBox322Cb()
const TextBox323Props = useStore((state)=>state["about"]["TextBox323"]);
const TextBox323IoProps = useIoStore((state)=>state["about"]["TextBox323"]);
const TextBox323Cb = useTextBox323Cb()
const Image142Props = useStore((state)=>state["about"]["Image142"]);
const Image142IoProps = useIoStore((state)=>state["about"]["Image142"]);
const Image142Cb = useImage142Cb()
const TextBox325Props = useStore((state)=>state["about"]["TextBox325"]);
const TextBox325IoProps = useIoStore((state)=>state["about"]["TextBox325"]);
const TextBox325Cb = useTextBox325Cb()
const TextBox326Props = useStore((state)=>state["about"]["TextBox326"]);
const TextBox326IoProps = useIoStore((state)=>state["about"]["TextBox326"]);
const TextBox326Cb = useTextBox326Cb()
const Image143Props = useStore((state)=>state["about"]["Image143"]);
const Image143IoProps = useIoStore((state)=>state["about"]["Image143"]);
const Image143Cb = useImage143Cb()
const TextBox300Props = useStore((state)=>state["about"]["TextBox300"]);
const TextBox300IoProps = useIoStore((state)=>state["about"]["TextBox300"]);
const TextBox300Cb = useTextBox300Cb()
const TextBox299Props = useStore((state)=>state["about"]["TextBox299"]);
const TextBox299IoProps = useIoStore((state)=>state["about"]["TextBox299"]);
const TextBox299Cb = useTextBox299Cb()
const Image134Props = useStore((state)=>state["about"]["Image134"]);
const Image134IoProps = useIoStore((state)=>state["about"]["Image134"]);
const Image134Cb = useImage134Cb()
const Image135Props = useStore((state)=>state["about"]["Image135"]);
const Image135IoProps = useIoStore((state)=>state["about"]["Image135"]);
const Image135Cb = useImage135Cb()
const Image130Props = useStore((state)=>state["about"]["Image130"]);
const Image130IoProps = useIoStore((state)=>state["about"]["Image130"]);
const Image130Cb = useImage130Cb()
const Image131Props = useStore((state)=>state["about"]["Image131"]);
const Image131IoProps = useIoStore((state)=>state["about"]["Image131"]);
const Image131Cb = useImage131Cb()
const Image132Props = useStore((state)=>state["about"]["Image132"]);
const Image132IoProps = useIoStore((state)=>state["about"]["Image132"]);
const Image132Cb = useImage132Cb()
const Image133Props = useStore((state)=>state["about"]["Image133"]);
const Image133IoProps = useIoStore((state)=>state["about"]["Image133"]);
const Image133Cb = useImage133Cb()
const TextBox302Props = useStore((state)=>state["about"]["TextBox302"]);
const TextBox302IoProps = useIoStore((state)=>state["about"]["TextBox302"]);
const TextBox302Cb = useTextBox302Cb()
const TextBox303Props = useStore((state)=>state["about"]["TextBox303"]);
const TextBox303IoProps = useIoStore((state)=>state["about"]["TextBox303"]);
const TextBox303Cb = useTextBox303Cb()
const TextBox304Props = useStore((state)=>state["about"]["TextBox304"]);
const TextBox304IoProps = useIoStore((state)=>state["about"]["TextBox304"]);
const TextBox304Cb = useTextBox304Cb()
const TextBox305Props = useStore((state)=>state["about"]["TextBox305"]);
const TextBox305IoProps = useIoStore((state)=>state["about"]["TextBox305"]);
const TextBox305Cb = useTextBox305Cb()
const TextBox306Props = useStore((state)=>state["about"]["TextBox306"]);
const TextBox306IoProps = useIoStore((state)=>state["about"]["TextBox306"]);
const TextBox306Cb = useTextBox306Cb()
const TextBox307Props = useStore((state)=>state["about"]["TextBox307"]);
const TextBox307IoProps = useIoStore((state)=>state["about"]["TextBox307"]);
const TextBox307Cb = useTextBox307Cb()
const TextBox308Props = useStore((state)=>state["about"]["TextBox308"]);
const TextBox308IoProps = useIoStore((state)=>state["about"]["TextBox308"]);
const TextBox308Cb = useTextBox308Cb()
const TextBox309Props = useStore((state)=>state["about"]["TextBox309"]);
const TextBox309IoProps = useIoStore((state)=>state["about"]["TextBox309"]);
const TextBox309Cb = useTextBox309Cb()
const TextBox301Props = useStore((state)=>state["about"]["TextBox301"]);
const TextBox301IoProps = useIoStore((state)=>state["about"]["TextBox301"]);
const TextBox301Cb = useTextBox301Cb()
const Image136Props = useStore((state)=>state["about"]["Image136"]);
const Image136IoProps = useIoStore((state)=>state["about"]["Image136"]);
const Image136Cb = useImage136Cb()
const Image137Props = useStore((state)=>state["about"]["Image137"]);
const Image137IoProps = useIoStore((state)=>state["about"]["Image137"]);
const Image137Cb = useImage137Cb()
const Image138Props = useStore((state)=>state["about"]["Image138"]);
const Image138IoProps = useIoStore((state)=>state["about"]["Image138"]);
const Image138Cb = useImage138Cb()
const Image139Props = useStore((state)=>state["about"]["Image139"]);
const Image139IoProps = useIoStore((state)=>state["about"]["Image139"]);
const Image139Cb = useImage139Cb()
const TextBox310Props = useStore((state)=>state["about"]["TextBox310"]);
const TextBox310IoProps = useIoStore((state)=>state["about"]["TextBox310"]);
const TextBox310Cb = useTextBox310Cb()
const TextBox311Props = useStore((state)=>state["about"]["TextBox311"]);
const TextBox311IoProps = useIoStore((state)=>state["about"]["TextBox311"]);
const TextBox311Cb = useTextBox311Cb()
const TextBox312Props = useStore((state)=>state["about"]["TextBox312"]);
const TextBox312IoProps = useIoStore((state)=>state["about"]["TextBox312"]);
const TextBox312Cb = useTextBox312Cb()
const TextBox313Props = useStore((state)=>state["about"]["TextBox313"]);
const TextBox313IoProps = useIoStore((state)=>state["about"]["TextBox313"]);
const TextBox313Cb = useTextBox313Cb()
const TextBox314Props = useStore((state)=>state["about"]["TextBox314"]);
const TextBox314IoProps = useIoStore((state)=>state["about"]["TextBox314"]);
const TextBox314Cb = useTextBox314Cb()
const TextBox315Props = useStore((state)=>state["about"]["TextBox315"]);
const TextBox315IoProps = useIoStore((state)=>state["about"]["TextBox315"]);
const TextBox315Cb = useTextBox315Cb()
const TextBox316Props = useStore((state)=>state["about"]["TextBox316"]);
const TextBox316IoProps = useIoStore((state)=>state["about"]["TextBox316"]);
const TextBox316Cb = useTextBox316Cb()
const TextBox317Props = useStore((state)=>state["about"]["TextBox317"]);
const TextBox317IoProps = useIoStore((state)=>state["about"]["TextBox317"]);
const TextBox317Cb = useTextBox317Cb()
const TextBox318Props = useStore((state)=>state["about"]["TextBox318"]);
const TextBox318IoProps = useIoStore((state)=>state["about"]["TextBox318"]);
const TextBox318Cb = useTextBox318Cb()
const Image179Props = useStore((state)=>state["about"]["Image179"]);
const Image179IoProps = useIoStore((state)=>state["about"]["Image179"]);
const Image179Cb = useImage179Cb()
const TextBox396Props = useStore((state)=>state["about"]["TextBox396"]);
const TextBox396IoProps = useIoStore((state)=>state["about"]["TextBox396"]);
const TextBox396Cb = useTextBox396Cb()
const Button41Props = useStore((state)=>state["about"]["Button41"]);
const Button41IoProps = useIoStore((state)=>state["about"]["Button41"]);
const Button41Cb = useButton41Cb()
const Button42Props = useStore((state)=>state["about"]["Button42"]);
const Button42IoProps = useIoStore((state)=>state["about"]["Button42"]);
const Button42Cb = useButton42Cb()
const TextBox333Props = useStore((state)=>state["about"]["TextBox333"]);
const TextBox333IoProps = useIoStore((state)=>state["about"]["TextBox333"]);
const TextBox333Cb = useTextBox333Cb()
const TextBox334Props = useStore((state)=>state["about"]["TextBox334"]);
const TextBox334IoProps = useIoStore((state)=>state["about"]["TextBox334"]);
const TextBox334Cb = useTextBox334Cb()
const TextBox335Props = useStore((state)=>state["about"]["TextBox335"]);
const TextBox335IoProps = useIoStore((state)=>state["about"]["TextBox335"]);
const TextBox335Cb = useTextBox335Cb()
const TextBox336Props = useStore((state)=>state["about"]["TextBox336"]);
const TextBox336IoProps = useIoStore((state)=>state["about"]["TextBox336"]);
const TextBox336Cb = useTextBox336Cb()
const TextBox337Props = useStore((state)=>state["about"]["TextBox337"]);
const TextBox337IoProps = useIoStore((state)=>state["about"]["TextBox337"]);
const TextBox337Cb = useTextBox337Cb()
const TextBox397Props = useStore((state)=>state["about"]["TextBox397"]);
const TextBox397IoProps = useIoStore((state)=>state["about"]["TextBox397"]);
const TextBox397Cb = useTextBox397Cb()

  return (<>
  <Flex1 className="p-about Flex300 bpt" {...Flex300Props} {...Flex300Cb} {...Flex300IoProps}>
<Flex1 className="p-about Flex299 bpt" {...Flex299Props} {...Flex299Cb} {...Flex299IoProps}>
<TextBox1 className="p-about TextBox333 bpt" {...TextBox333Props} {...TextBox333Cb} {...TextBox333IoProps}/>
<TextBox1 className="p-about TextBox337 bpt" {...TextBox337Props} {...TextBox337Cb} {...TextBox337IoProps}/>
<TextBox1 className="p-about TextBox335 bpt" {...TextBox335Props} {...TextBox335Cb} {...TextBox335IoProps}/>
<TextBox1 className="p-about TextBox336 bpt" {...TextBox336Props} {...TextBox336Cb} {...TextBox336IoProps}/>
<TextBox1 className="p-about TextBox397 bpt" {...TextBox397Props} {...TextBox397Cb} {...TextBox397IoProps}/>
<TextBox1 className="p-about TextBox334 bpt" {...TextBox334Props} {...TextBox334Cb} {...TextBox334IoProps}/>
</Flex1>
<Flex1 className="p-about Flex298 bpt" {...Flex298Props} {...Flex298Cb} {...Flex298IoProps}>
<Button1 className="p-about Button42 bpt" {...Button42Props} {...Button42Cb} {...Button42IoProps}/>
<Button1 className="p-about Button41 bpt" {...Button41Props} {...Button41Cb} {...Button41IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex219 bpt" {...Flex219Props} {...Flex219Cb} {...Flex219IoProps}>
<Flex1 className="p-about Flex218 bpt" {...Flex218Props} {...Flex218Cb} {...Flex218IoProps}>
<TextBox1 className="p-about TextBox238 bpt" {...TextBox238Props} {...TextBox238Cb} {...TextBox238IoProps}/>
<TextBox1 className="p-about TextBox239 bpt" {...TextBox239Props} {...TextBox239Cb} {...TextBox239IoProps}/>
</Flex1>
<Flex1 className="p-about Flex217 bpt" {...Flex217Props} {...Flex217Cb} {...Flex217IoProps}>
<Image1 className="p-about Image102 bpt" {...Image102Props} {...Image102Cb} {...Image102IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex225 bpt" {...Flex225Props} {...Flex225Cb} {...Flex225IoProps}>
<Flex1 className="p-about Flex224 bpt" {...Flex224Props} {...Flex224Cb} {...Flex224IoProps}>
<Image1 className="p-about Image104 bpt" {...Image104Props} {...Image104Cb} {...Image104IoProps}/>
</Flex1>
<Flex1 className="p-about Flex223 bpt" {...Flex223Props} {...Flex223Cb} {...Flex223IoProps}/>
</Flex1>
<Flex1 className="p-about Flex240 bpt" {...Flex240Props} {...Flex240Cb} {...Flex240IoProps}>
<Flex1 className="p-about Flex250 bpt" {...Flex250Props} {...Flex250Cb} {...Flex250IoProps}>
<Flex1 className="p-about Flex249 bpt" {...Flex249Props} {...Flex249Cb} {...Flex249IoProps}>
<TextBox1 className="p-about TextBox258 bpt" {...TextBox258Props} {...TextBox258Cb} {...TextBox258IoProps}/>
<Image1 className="p-about Image118 bpt" {...Image118Props} {...Image118Cb} {...Image118IoProps}/>
<Image1 className="p-about Image117 bpt" {...Image117Props} {...Image117Cb} {...Image117IoProps}/>
<Image1 className="p-about Image115 bpt" {...Image115Props} {...Image115Cb} {...Image115IoProps}/>
<Image1 className="p-about Image116 bpt" {...Image116Props} {...Image116Cb} {...Image116IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex242 bpt" {...Flex242Props} {...Flex242Cb} {...Flex242IoProps}>
<Flex1 className="p-about Flex244 bpt" {...Flex244Props} {...Flex244Cb} {...Flex244IoProps}>
<Image1 className="p-about Image113 bpt" {...Image113Props} {...Image113Cb} {...Image113IoProps}/>
</Flex1>
<Flex1 className="p-about Flex245 bpt" {...Flex245Props} {...Flex245Cb} {...Flex245IoProps}>
<TextBox1 className="p-about TextBox254 bpt" {...TextBox254Props} {...TextBox254Cb} {...TextBox254IoProps}/>
<TextBox1 className="p-about TextBox251 bpt" {...TextBox251Props} {...TextBox251Cb} {...TextBox251IoProps}/>
<TextBox1 className="p-about TextBox253 bpt" {...TextBox253Props} {...TextBox253Cb} {...TextBox253IoProps}/>
<Button1 className="p-about Button37 bpt" {...Button37Props} {...Button37Cb} {...Button37IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex243 bpt" {...Flex243Props} {...Flex243Cb} {...Flex243IoProps}>
<Flex1 className="p-about Flex248 bpt" {...Flex248Props} {...Flex248Cb} {...Flex248IoProps}>
<Flex1 className="p-about Flex246 bpt" {...Flex246Props} {...Flex246Cb} {...Flex246IoProps}>
<TextBox1 className="p-about TextBox255 bpt" {...TextBox255Props} {...TextBox255Cb} {...TextBox255IoProps}/>
<TextBox1 className="p-about TextBox257 bpt" {...TextBox257Props} {...TextBox257Cb} {...TextBox257IoProps}/>
<TextBox1 className="p-about TextBox256 bpt" {...TextBox256Props} {...TextBox256Cb} {...TextBox256IoProps}/>
<Button1 className="p-about Button38 bpt" {...Button38Props} {...Button38Cb} {...Button38IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex247 bpt" {...Flex247Props} {...Flex247Cb} {...Flex247IoProps}>
<Image1 className="p-about Image114 bpt" {...Image114Props} {...Image114Cb} {...Image114IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex270 bpt" {...Flex270Props} {...Flex270Cb} {...Flex270IoProps}>
<TextBox1 className="p-about TextBox284 bpt" {...TextBox284Props} {...TextBox284Cb} {...TextBox284IoProps}/>
<TextBox1 className="p-about TextBox283 bpt" {...TextBox283Props} {...TextBox283Cb} {...TextBox283IoProps}/>
<Flex1 className="p-about Flex268 bpt" {...Flex268Props} {...Flex268Cb} {...Flex268IoProps}>
<Flex1 className="p-about Flex264 bpt" {...Flex264Props} {...Flex264Cb} {...Flex264IoProps}>
<Image1 className="p-about Image124 bpt" {...Image124Props} {...Image124Cb} {...Image124IoProps}/>
<TextBox1 className="p-about TextBox278 bpt" {...TextBox278Props} {...TextBox278Cb} {...TextBox278IoProps}/>
<TextBox1 className="p-about TextBox285 bpt" {...TextBox285Props} {...TextBox285Cb} {...TextBox285IoProps}/>
<TextBox1 className="p-about TextBox277 bpt" {...TextBox277Props} {...TextBox277Cb} {...TextBox277IoProps}/>
</Flex1>
<Flex1 className="p-about Flex265 bpt" {...Flex265Props} {...Flex265Cb} {...Flex265IoProps}>
<Image1 className="p-about Image125 bpt" {...Image125Props} {...Image125Cb} {...Image125IoProps}/>
<TextBox1 className="p-about TextBox280 bpt" {...TextBox280Props} {...TextBox280Cb} {...TextBox280IoProps}/>
<TextBox1 className="p-about TextBox286 bpt" {...TextBox286Props} {...TextBox286Cb} {...TextBox286IoProps}/>
<TextBox1 className="p-about TextBox279 bpt" {...TextBox279Props} {...TextBox279Cb} {...TextBox279IoProps}/>
</Flex1>
<Flex1 className="p-about Flex266 bpt" {...Flex266Props} {...Flex266Cb} {...Flex266IoProps}>
<Image1 className="p-about Image126 bpt" {...Image126Props} {...Image126Cb} {...Image126IoProps}/>
<TextBox1 className="p-about TextBox282 bpt" {...TextBox282Props} {...TextBox282Cb} {...TextBox282IoProps}/>
<TextBox1 className="p-about TextBox287 bpt" {...TextBox287Props} {...TextBox287Cb} {...TextBox287IoProps}/>
<TextBox1 className="p-about TextBox281 bpt" {...TextBox281Props} {...TextBox281Cb} {...TextBox281IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex275 bpt" {...Flex275Props} {...Flex275Cb} {...Flex275IoProps}>
<TextBox1 className="p-about TextBox297 bpt" {...TextBox297Props} {...TextBox297Cb} {...TextBox297IoProps}/>
<Flex1 className="p-about Flex294 bpt" {...Flex294Props} {...Flex294Cb} {...Flex294IoProps}>
<Flex1 className="p-about Flex291 bpt" {...Flex291Props} {...Flex291Cb} {...Flex291IoProps}>
<Image1 className="p-about Image141 bpt" {...Image141Props} {...Image141Cb} {...Image141IoProps}/>
<TextBox1 className="p-about TextBox320 bpt" {...TextBox320Props} {...TextBox320Cb} {...TextBox320IoProps}/>
<TextBox1 className="p-about TextBox319 bpt" {...TextBox319Props} {...TextBox319Cb} {...TextBox319IoProps}/>
</Flex1>
<Flex1 className="p-about Flex292 bpt" {...Flex292Props} {...Flex292Cb} {...Flex292IoProps}>
<Image1 className="p-about Image142 bpt" {...Image142Props} {...Image142Cb} {...Image142IoProps}/>
<TextBox1 className="p-about TextBox323 bpt" {...TextBox323Props} {...TextBox323Cb} {...TextBox323IoProps}/>
<TextBox1 className="p-about TextBox322 bpt" {...TextBox322Props} {...TextBox322Cb} {...TextBox322IoProps}/>
</Flex1>
<Flex1 className="p-about Flex293 bpt" {...Flex293Props} {...Flex293Cb} {...Flex293IoProps}>
<Image1 className="p-about Image143 bpt" {...Image143Props} {...Image143Cb} {...Image143IoProps}/>
<TextBox1 className="p-about TextBox326 bpt" {...TextBox326Props} {...TextBox326Cb} {...TextBox326IoProps}/>
<TextBox1 className="p-about TextBox325 bpt" {...TextBox325Props} {...TextBox325Cb} {...TextBox325IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex274 bpt" {...Flex274Props} {...Flex274Cb} {...Flex274IoProps}>
<Flex1 className="p-about Flex273 bpt" {...Flex273Props} {...Flex273Cb} {...Flex273IoProps}>
<Image1 className="p-about Image129 bpt" {...Image129Props} {...Image129Cb} {...Image129IoProps}/>
<TextBox1 className="p-about TextBox295 bpt" {...TextBox295Props} {...TextBox295Cb} {...TextBox295IoProps}/>
<TextBox1 className="p-about TextBox296 bpt" {...TextBox296Props} {...TextBox296Cb} {...TextBox296IoProps}/>
</Flex1>
<Flex1 className="p-about Flex272 bpt" {...Flex272Props} {...Flex272Cb} {...Flex272IoProps}>
<Image1 className="p-about Image128 bpt" {...Image128Props} {...Image128Cb} {...Image128IoProps}/>
<TextBox1 className="p-about TextBox292 bpt" {...TextBox292Props} {...TextBox292Cb} {...TextBox292IoProps}/>
<TextBox1 className="p-about TextBox293 bpt" {...TextBox293Props} {...TextBox293Cb} {...TextBox293IoProps}/>
</Flex1>
<Flex1 className="p-about Flex271 bpt" {...Flex271Props} {...Flex271Cb} {...Flex271IoProps}>
<Image1 className="p-about Image127 bpt" {...Image127Props} {...Image127Cb} {...Image127IoProps}/>
<TextBox1 className="p-about TextBox289 bpt" {...TextBox289Props} {...TextBox289Cb} {...TextBox289IoProps}/>
<TextBox1 className="p-about TextBox290 bpt" {...TextBox290Props} {...TextBox290Cb} {...TextBox290IoProps}/>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex282 bpt" {...Flex282Props} {...Flex282Cb} {...Flex282IoProps}>
<Flex1 className="p-about Flex280 bpt" {...Flex280Props} {...Flex280Cb} {...Flex280IoProps}>
<TextBox1 className="p-about TextBox300 bpt" {...TextBox300Props} {...TextBox300Cb} {...TextBox300IoProps}/>
<Flex1 className="p-about Flex278 bpt" {...Flex278Props} {...Flex278Cb} {...Flex278IoProps}>
<TextBox1 className="p-about TextBox299 bpt" {...TextBox299Props} {...TextBox299Cb} {...TextBox299IoProps}/>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex281 bpt" {...Flex281Props} {...Flex281Cb} {...Flex281IoProps}>
<Image1 className="p-about Image134 bpt" {...Image134Props} {...Image134Cb} {...Image134IoProps}/>
<Image1 className="p-about Image135 bpt" {...Image135Props} {...Image135Cb} {...Image135IoProps}/>
<Flex1 className="p-about Flex279 bpt" {...Flex279Props} {...Flex279Cb} {...Flex279IoProps}>
<Flex1 className="p-about Flex276 bpt" {...Flex276Props} {...Flex276Cb} {...Flex276IoProps}>
<Image1 className="p-about Image131 bpt" {...Image131Props} {...Image131Cb} {...Image131IoProps}/>
<Image1 className="p-about Image130 bpt" {...Image130Props} {...Image130Cb} {...Image130IoProps}/>
</Flex1>
<Flex1 className="p-about Flex277 bpt" {...Flex277Props} {...Flex277Cb} {...Flex277IoProps}>
<Image1 className="p-about Image132 bpt" {...Image132Props} {...Image132Cb} {...Image132IoProps}/>
<Image1 className="p-about Image133 bpt" {...Image133Props} {...Image133Cb} {...Image133IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
<Flex1 className="p-about Flex290 bpt" {...Flex290Props} {...Flex290Cb} {...Flex290IoProps}>
<Flex1 className="p-about Flex289 bpt" {...Flex289Props} {...Flex289Cb} {...Flex289IoProps}>
<TextBox1 className="p-about TextBox396 bpt" {...TextBox396Props} {...TextBox396Cb} {...TextBox396IoProps}/>
<TextBox1 className="p-about TextBox318 bpt" {...TextBox318Props} {...TextBox318Cb} {...TextBox318IoProps}/>
<Image1 className="p-about Image179 bpt" {...Image179Props} {...Image179Cb} {...Image179IoProps}/>
</Flex1>
<Flex1 className="p-about Flex288 bpt" {...Flex288Props} {...Flex288Cb} {...Flex288IoProps}>
<TextBox1 className="p-about TextBox317 bpt" {...TextBox317Props} {...TextBox317Cb} {...TextBox317IoProps}/>
<TextBox1 className="p-about TextBox316 bpt" {...TextBox316Props} {...TextBox316Cb} {...TextBox316IoProps}/>
<TextBox1 className="p-about TextBox315 bpt" {...TextBox315Props} {...TextBox315Cb} {...TextBox315IoProps}/>
<TextBox1 className="p-about TextBox314 bpt" {...TextBox314Props} {...TextBox314Cb} {...TextBox314IoProps}/>
<TextBox1 className="p-about TextBox313 bpt" {...TextBox313Props} {...TextBox313Cb} {...TextBox313IoProps}/>
<TextBox1 className="p-about TextBox312 bpt" {...TextBox312Props} {...TextBox312Cb} {...TextBox312IoProps}/>
<TextBox1 className="p-about TextBox311 bpt" {...TextBox311Props} {...TextBox311Cb} {...TextBox311IoProps}/>
<TextBox1 className="p-about TextBox310 bpt" {...TextBox310Props} {...TextBox310Cb} {...TextBox310IoProps}/>
</Flex1>
<Flex1 className="p-about Flex286 bpt" {...Flex286Props} {...Flex286Cb} {...Flex286IoProps}>
<TextBox1 className="p-about TextBox304 bpt" {...TextBox304Props} {...TextBox304Cb} {...TextBox304IoProps}/>
<TextBox1 className="p-about TextBox305 bpt" {...TextBox305Props} {...TextBox305Cb} {...TextBox305IoProps}/>
<TextBox1 className="p-about TextBox303 bpt" {...TextBox303Props} {...TextBox303Cb} {...TextBox303IoProps}/>
<TextBox1 className="p-about TextBox302 bpt" {...TextBox302Props} {...TextBox302Cb} {...TextBox302IoProps}/>
<TextBox1 className="p-about TextBox306 bpt" {...TextBox306Props} {...TextBox306Cb} {...TextBox306IoProps}/>
<TextBox1 className="p-about TextBox307 bpt" {...TextBox307Props} {...TextBox307Cb} {...TextBox307IoProps}/>
<TextBox1 className="p-about TextBox308 bpt" {...TextBox308Props} {...TextBox308Cb} {...TextBox308IoProps}/>
<TextBox1 className="p-about TextBox309 bpt" {...TextBox309Props} {...TextBox309Cb} {...TextBox309IoProps}/>
</Flex1>
<Flex1 className="p-about Flex287 bpt" {...Flex287Props} {...Flex287Cb} {...Flex287IoProps}>
<Flex1 className="p-about Flex285 bpt" {...Flex285Props} {...Flex285Cb} {...Flex285IoProps}>
<TextBox1 className="p-about TextBox301 bpt" {...TextBox301Props} {...TextBox301Cb} {...TextBox301IoProps}/>
<Flex1 className="p-about Flex284 bpt" {...Flex284Props} {...Flex284Cb} {...Flex284IoProps}>
<Image1 className="p-about Image138 bpt" {...Image138Props} {...Image138Cb} {...Image138IoProps}/>
<Image1 className="p-about Image139 bpt" {...Image139Props} {...Image139Cb} {...Image139IoProps}/>
</Flex1>
<Flex1 className="p-about Flex283 bpt" {...Flex283Props} {...Flex283Cb} {...Flex283IoProps}>
<Image1 className="p-about Image137 bpt" {...Image137Props} {...Image137Cb} {...Image137IoProps}/>
<Image1 className="p-about Image136 bpt" {...Image136Props} {...Image136Cb} {...Image136IoProps}/>
</Flex1>
</Flex1>
</Flex1>
</Flex1>
  </>);
}
