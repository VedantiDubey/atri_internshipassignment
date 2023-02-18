import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button2 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { useFlex325Cb, useFlex323Cb, useFlex318Cb, useFlex310Cb, useFlex319Cb, useFlex311Cb, useFlex320Cb, useFlex312Cb, useFlex321Cb, useFlex313Cb, useFlex324Cb, useFlex322Cb, useFlex314Cb, useFlex306Cb, useFlex315Cb, useFlex307Cb, useFlex316Cb, useFlex308Cb, useFlex317Cb, useFlex309Cb, useFlex326Cb, useFlex327Cb, useFlex329Cb, useFlex330Cb, useFlex333Cb, useFlex341Cb, useFlex342Cb, useFlex343Cb, useFlex348Cb, useFlex344Cb, useFlex345Cb, useFlex346Cb, useFlex347Cb, useFlex356Cb, useFlex352Cb, useFlex353Cb, useFlex354Cb, useFlex351Cb, useFlex349Cb, useFlex350Cb, useFlex355Cb, useFlex363Cb, useFlex361Cb, useFlex362Cb, useTextBox373Cb, useTextBox374Cb, useImage151Cb, useTextBox365Cb, useTextBox366Cb, useTextBox353Cb, useTextBox367Cb, useTextBox368Cb, useImage152Cb, useTextBox354Cb, useTextBox369Cb, useTextBox370Cb, useImage153Cb, useTextBox355Cb, useTextBox371Cb, useTextBox372Cb, useImage154Cb, useTextBox356Cb, useImage147Cb, useTextBox357Cb, useTextBox358Cb, useTextBox349Cb, useImage148Cb, useTextBox359Cb, useTextBox360Cb, useTextBox350Cb, useImage149Cb, useTextBox361Cb, useTextBox362Cb, useTextBox351Cb, useTextBox363Cb, useTextBox364Cb, useImage150Cb, useTextBox352Cb, useButton43Cb, useButton48Cb, useButton49Cb, useButton50Cb, useButton51Cb, useTextBox375Cb, useTextBox376Cb, useImage182Cb, useImage166Cb, useImage183Cb, useImage168Cb, useImage169Cb, useImage170Cb, useImage184Cb, useImage172Cb, useTextBox378Cb, useImage185Cb, useTextBox410Cb, useTextBox379Cb, useTextBox380Cb, useTextBox381Cb, useTextBox382Cb, useTextBox383Cb, useTextBox384Cb, useTextBox385Cb, useTextBox386Cb, useTextBox377Cb, useImage173Cb, useImage174Cb, useImage175Cb, useImage176Cb, useTextBox387Cb, useTextBox388Cb, useTextBox389Cb, useTextBox390Cb, useTextBox391Cb, useTextBox392Cb, useTextBox393Cb, useTextBox394Cb, useTextBox404Cb, useTextBox405Cb, useTextBox406Cb, useTextBox407Cb, useTextBox408Cb, useTextBox409Cb, useButton54Cb, useButton55Cb } from "../page-cbs/Menu";
import "../page-css/Menu.css";
import "../custom/Menu";

export default function Menu() {
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

  const Flex325Props = useStore((state)=>state["Menu"]["Flex325"]);
const Flex325IoProps = useIoStore((state)=>state["Menu"]["Flex325"]);
const Flex325Cb = useFlex325Cb()
const Flex323Props = useStore((state)=>state["Menu"]["Flex323"]);
const Flex323IoProps = useIoStore((state)=>state["Menu"]["Flex323"]);
const Flex323Cb = useFlex323Cb()
const Flex318Props = useStore((state)=>state["Menu"]["Flex318"]);
const Flex318IoProps = useIoStore((state)=>state["Menu"]["Flex318"]);
const Flex318Cb = useFlex318Cb()
const Flex310Props = useStore((state)=>state["Menu"]["Flex310"]);
const Flex310IoProps = useIoStore((state)=>state["Menu"]["Flex310"]);
const Flex310Cb = useFlex310Cb()
const Flex319Props = useStore((state)=>state["Menu"]["Flex319"]);
const Flex319IoProps = useIoStore((state)=>state["Menu"]["Flex319"]);
const Flex319Cb = useFlex319Cb()
const Flex311Props = useStore((state)=>state["Menu"]["Flex311"]);
const Flex311IoProps = useIoStore((state)=>state["Menu"]["Flex311"]);
const Flex311Cb = useFlex311Cb()
const Flex320Props = useStore((state)=>state["Menu"]["Flex320"]);
const Flex320IoProps = useIoStore((state)=>state["Menu"]["Flex320"]);
const Flex320Cb = useFlex320Cb()
const Flex312Props = useStore((state)=>state["Menu"]["Flex312"]);
const Flex312IoProps = useIoStore((state)=>state["Menu"]["Flex312"]);
const Flex312Cb = useFlex312Cb()
const Flex321Props = useStore((state)=>state["Menu"]["Flex321"]);
const Flex321IoProps = useIoStore((state)=>state["Menu"]["Flex321"]);
const Flex321Cb = useFlex321Cb()
const Flex313Props = useStore((state)=>state["Menu"]["Flex313"]);
const Flex313IoProps = useIoStore((state)=>state["Menu"]["Flex313"]);
const Flex313Cb = useFlex313Cb()
const Flex324Props = useStore((state)=>state["Menu"]["Flex324"]);
const Flex324IoProps = useIoStore((state)=>state["Menu"]["Flex324"]);
const Flex324Cb = useFlex324Cb()
const Flex322Props = useStore((state)=>state["Menu"]["Flex322"]);
const Flex322IoProps = useIoStore((state)=>state["Menu"]["Flex322"]);
const Flex322Cb = useFlex322Cb()
const Flex314Props = useStore((state)=>state["Menu"]["Flex314"]);
const Flex314IoProps = useIoStore((state)=>state["Menu"]["Flex314"]);
const Flex314Cb = useFlex314Cb()
const Flex306Props = useStore((state)=>state["Menu"]["Flex306"]);
const Flex306IoProps = useIoStore((state)=>state["Menu"]["Flex306"]);
const Flex306Cb = useFlex306Cb()
const Flex315Props = useStore((state)=>state["Menu"]["Flex315"]);
const Flex315IoProps = useIoStore((state)=>state["Menu"]["Flex315"]);
const Flex315Cb = useFlex315Cb()
const Flex307Props = useStore((state)=>state["Menu"]["Flex307"]);
const Flex307IoProps = useIoStore((state)=>state["Menu"]["Flex307"]);
const Flex307Cb = useFlex307Cb()
const Flex316Props = useStore((state)=>state["Menu"]["Flex316"]);
const Flex316IoProps = useIoStore((state)=>state["Menu"]["Flex316"]);
const Flex316Cb = useFlex316Cb()
const Flex308Props = useStore((state)=>state["Menu"]["Flex308"]);
const Flex308IoProps = useIoStore((state)=>state["Menu"]["Flex308"]);
const Flex308Cb = useFlex308Cb()
const Flex317Props = useStore((state)=>state["Menu"]["Flex317"]);
const Flex317IoProps = useIoStore((state)=>state["Menu"]["Flex317"]);
const Flex317Cb = useFlex317Cb()
const Flex309Props = useStore((state)=>state["Menu"]["Flex309"]);
const Flex309IoProps = useIoStore((state)=>state["Menu"]["Flex309"]);
const Flex309Cb = useFlex309Cb()
const Flex326Props = useStore((state)=>state["Menu"]["Flex326"]);
const Flex326IoProps = useIoStore((state)=>state["Menu"]["Flex326"]);
const Flex326Cb = useFlex326Cb()
const Flex327Props = useStore((state)=>state["Menu"]["Flex327"]);
const Flex327IoProps = useIoStore((state)=>state["Menu"]["Flex327"]);
const Flex327Cb = useFlex327Cb()
const Flex329Props = useStore((state)=>state["Menu"]["Flex329"]);
const Flex329IoProps = useIoStore((state)=>state["Menu"]["Flex329"]);
const Flex329Cb = useFlex329Cb()
const Flex330Props = useStore((state)=>state["Menu"]["Flex330"]);
const Flex330IoProps = useIoStore((state)=>state["Menu"]["Flex330"]);
const Flex330Cb = useFlex330Cb()
const Flex333Props = useStore((state)=>state["Menu"]["Flex333"]);
const Flex333IoProps = useIoStore((state)=>state["Menu"]["Flex333"]);
const Flex333Cb = useFlex333Cb()
const Flex341Props = useStore((state)=>state["Menu"]["Flex341"]);
const Flex341IoProps = useIoStore((state)=>state["Menu"]["Flex341"]);
const Flex341Cb = useFlex341Cb()
const Flex342Props = useStore((state)=>state["Menu"]["Flex342"]);
const Flex342IoProps = useIoStore((state)=>state["Menu"]["Flex342"]);
const Flex342Cb = useFlex342Cb()
const Flex343Props = useStore((state)=>state["Menu"]["Flex343"]);
const Flex343IoProps = useIoStore((state)=>state["Menu"]["Flex343"]);
const Flex343Cb = useFlex343Cb()
const Flex348Props = useStore((state)=>state["Menu"]["Flex348"]);
const Flex348IoProps = useIoStore((state)=>state["Menu"]["Flex348"]);
const Flex348Cb = useFlex348Cb()
const Flex344Props = useStore((state)=>state["Menu"]["Flex344"]);
const Flex344IoProps = useIoStore((state)=>state["Menu"]["Flex344"]);
const Flex344Cb = useFlex344Cb()
const Flex345Props = useStore((state)=>state["Menu"]["Flex345"]);
const Flex345IoProps = useIoStore((state)=>state["Menu"]["Flex345"]);
const Flex345Cb = useFlex345Cb()
const Flex346Props = useStore((state)=>state["Menu"]["Flex346"]);
const Flex346IoProps = useIoStore((state)=>state["Menu"]["Flex346"]);
const Flex346Cb = useFlex346Cb()
const Flex347Props = useStore((state)=>state["Menu"]["Flex347"]);
const Flex347IoProps = useIoStore((state)=>state["Menu"]["Flex347"]);
const Flex347Cb = useFlex347Cb()
const Flex356Props = useStore((state)=>state["Menu"]["Flex356"]);
const Flex356IoProps = useIoStore((state)=>state["Menu"]["Flex356"]);
const Flex356Cb = useFlex356Cb()
const Flex352Props = useStore((state)=>state["Menu"]["Flex352"]);
const Flex352IoProps = useIoStore((state)=>state["Menu"]["Flex352"]);
const Flex352Cb = useFlex352Cb()
const Flex353Props = useStore((state)=>state["Menu"]["Flex353"]);
const Flex353IoProps = useIoStore((state)=>state["Menu"]["Flex353"]);
const Flex353Cb = useFlex353Cb()
const Flex354Props = useStore((state)=>state["Menu"]["Flex354"]);
const Flex354IoProps = useIoStore((state)=>state["Menu"]["Flex354"]);
const Flex354Cb = useFlex354Cb()
const Flex351Props = useStore((state)=>state["Menu"]["Flex351"]);
const Flex351IoProps = useIoStore((state)=>state["Menu"]["Flex351"]);
const Flex351Cb = useFlex351Cb()
const Flex349Props = useStore((state)=>state["Menu"]["Flex349"]);
const Flex349IoProps = useIoStore((state)=>state["Menu"]["Flex349"]);
const Flex349Cb = useFlex349Cb()
const Flex350Props = useStore((state)=>state["Menu"]["Flex350"]);
const Flex350IoProps = useIoStore((state)=>state["Menu"]["Flex350"]);
const Flex350Cb = useFlex350Cb()
const Flex355Props = useStore((state)=>state["Menu"]["Flex355"]);
const Flex355IoProps = useIoStore((state)=>state["Menu"]["Flex355"]);
const Flex355Cb = useFlex355Cb()
const Flex363Props = useStore((state)=>state["Menu"]["Flex363"]);
const Flex363IoProps = useIoStore((state)=>state["Menu"]["Flex363"]);
const Flex363Cb = useFlex363Cb()
const Flex361Props = useStore((state)=>state["Menu"]["Flex361"]);
const Flex361IoProps = useIoStore((state)=>state["Menu"]["Flex361"]);
const Flex361Cb = useFlex361Cb()
const Flex362Props = useStore((state)=>state["Menu"]["Flex362"]);
const Flex362IoProps = useIoStore((state)=>state["Menu"]["Flex362"]);
const Flex362Cb = useFlex362Cb()
const TextBox373Props = useStore((state)=>state["Menu"]["TextBox373"]);
const TextBox373IoProps = useIoStore((state)=>state["Menu"]["TextBox373"]);
const TextBox373Cb = useTextBox373Cb()
const TextBox374Props = useStore((state)=>state["Menu"]["TextBox374"]);
const TextBox374IoProps = useIoStore((state)=>state["Menu"]["TextBox374"]);
const TextBox374Cb = useTextBox374Cb()
const Image151Props = useStore((state)=>state["Menu"]["Image151"]);
const Image151IoProps = useIoStore((state)=>state["Menu"]["Image151"]);
const Image151Cb = useImage151Cb()
const TextBox365Props = useStore((state)=>state["Menu"]["TextBox365"]);
const TextBox365IoProps = useIoStore((state)=>state["Menu"]["TextBox365"]);
const TextBox365Cb = useTextBox365Cb()
const TextBox366Props = useStore((state)=>state["Menu"]["TextBox366"]);
const TextBox366IoProps = useIoStore((state)=>state["Menu"]["TextBox366"]);
const TextBox366Cb = useTextBox366Cb()
const TextBox353Props = useStore((state)=>state["Menu"]["TextBox353"]);
const TextBox353IoProps = useIoStore((state)=>state["Menu"]["TextBox353"]);
const TextBox353Cb = useTextBox353Cb()
const TextBox367Props = useStore((state)=>state["Menu"]["TextBox367"]);
const TextBox367IoProps = useIoStore((state)=>state["Menu"]["TextBox367"]);
const TextBox367Cb = useTextBox367Cb()
const TextBox368Props = useStore((state)=>state["Menu"]["TextBox368"]);
const TextBox368IoProps = useIoStore((state)=>state["Menu"]["TextBox368"]);
const TextBox368Cb = useTextBox368Cb()
const Image152Props = useStore((state)=>state["Menu"]["Image152"]);
const Image152IoProps = useIoStore((state)=>state["Menu"]["Image152"]);
const Image152Cb = useImage152Cb()
const TextBox354Props = useStore((state)=>state["Menu"]["TextBox354"]);
const TextBox354IoProps = useIoStore((state)=>state["Menu"]["TextBox354"]);
const TextBox354Cb = useTextBox354Cb()
const TextBox369Props = useStore((state)=>state["Menu"]["TextBox369"]);
const TextBox369IoProps = useIoStore((state)=>state["Menu"]["TextBox369"]);
const TextBox369Cb = useTextBox369Cb()
const TextBox370Props = useStore((state)=>state["Menu"]["TextBox370"]);
const TextBox370IoProps = useIoStore((state)=>state["Menu"]["TextBox370"]);
const TextBox370Cb = useTextBox370Cb()
const Image153Props = useStore((state)=>state["Menu"]["Image153"]);
const Image153IoProps = useIoStore((state)=>state["Menu"]["Image153"]);
const Image153Cb = useImage153Cb()
const TextBox355Props = useStore((state)=>state["Menu"]["TextBox355"]);
const TextBox355IoProps = useIoStore((state)=>state["Menu"]["TextBox355"]);
const TextBox355Cb = useTextBox355Cb()
const TextBox371Props = useStore((state)=>state["Menu"]["TextBox371"]);
const TextBox371IoProps = useIoStore((state)=>state["Menu"]["TextBox371"]);
const TextBox371Cb = useTextBox371Cb()
const TextBox372Props = useStore((state)=>state["Menu"]["TextBox372"]);
const TextBox372IoProps = useIoStore((state)=>state["Menu"]["TextBox372"]);
const TextBox372Cb = useTextBox372Cb()
const Image154Props = useStore((state)=>state["Menu"]["Image154"]);
const Image154IoProps = useIoStore((state)=>state["Menu"]["Image154"]);
const Image154Cb = useImage154Cb()
const TextBox356Props = useStore((state)=>state["Menu"]["TextBox356"]);
const TextBox356IoProps = useIoStore((state)=>state["Menu"]["TextBox356"]);
const TextBox356Cb = useTextBox356Cb()
const Image147Props = useStore((state)=>state["Menu"]["Image147"]);
const Image147IoProps = useIoStore((state)=>state["Menu"]["Image147"]);
const Image147Cb = useImage147Cb()
const TextBox357Props = useStore((state)=>state["Menu"]["TextBox357"]);
const TextBox357IoProps = useIoStore((state)=>state["Menu"]["TextBox357"]);
const TextBox357Cb = useTextBox357Cb()
const TextBox358Props = useStore((state)=>state["Menu"]["TextBox358"]);
const TextBox358IoProps = useIoStore((state)=>state["Menu"]["TextBox358"]);
const TextBox358Cb = useTextBox358Cb()
const TextBox349Props = useStore((state)=>state["Menu"]["TextBox349"]);
const TextBox349IoProps = useIoStore((state)=>state["Menu"]["TextBox349"]);
const TextBox349Cb = useTextBox349Cb()
const Image148Props = useStore((state)=>state["Menu"]["Image148"]);
const Image148IoProps = useIoStore((state)=>state["Menu"]["Image148"]);
const Image148Cb = useImage148Cb()
const TextBox359Props = useStore((state)=>state["Menu"]["TextBox359"]);
const TextBox359IoProps = useIoStore((state)=>state["Menu"]["TextBox359"]);
const TextBox359Cb = useTextBox359Cb()
const TextBox360Props = useStore((state)=>state["Menu"]["TextBox360"]);
const TextBox360IoProps = useIoStore((state)=>state["Menu"]["TextBox360"]);
const TextBox360Cb = useTextBox360Cb()
const TextBox350Props = useStore((state)=>state["Menu"]["TextBox350"]);
const TextBox350IoProps = useIoStore((state)=>state["Menu"]["TextBox350"]);
const TextBox350Cb = useTextBox350Cb()
const Image149Props = useStore((state)=>state["Menu"]["Image149"]);
const Image149IoProps = useIoStore((state)=>state["Menu"]["Image149"]);
const Image149Cb = useImage149Cb()
const TextBox361Props = useStore((state)=>state["Menu"]["TextBox361"]);
const TextBox361IoProps = useIoStore((state)=>state["Menu"]["TextBox361"]);
const TextBox361Cb = useTextBox361Cb()
const TextBox362Props = useStore((state)=>state["Menu"]["TextBox362"]);
const TextBox362IoProps = useIoStore((state)=>state["Menu"]["TextBox362"]);
const TextBox362Cb = useTextBox362Cb()
const TextBox351Props = useStore((state)=>state["Menu"]["TextBox351"]);
const TextBox351IoProps = useIoStore((state)=>state["Menu"]["TextBox351"]);
const TextBox351Cb = useTextBox351Cb()
const TextBox363Props = useStore((state)=>state["Menu"]["TextBox363"]);
const TextBox363IoProps = useIoStore((state)=>state["Menu"]["TextBox363"]);
const TextBox363Cb = useTextBox363Cb()
const TextBox364Props = useStore((state)=>state["Menu"]["TextBox364"]);
const TextBox364IoProps = useIoStore((state)=>state["Menu"]["TextBox364"]);
const TextBox364Cb = useTextBox364Cb()
const Image150Props = useStore((state)=>state["Menu"]["Image150"]);
const Image150IoProps = useIoStore((state)=>state["Menu"]["Image150"]);
const Image150Cb = useImage150Cb()
const TextBox352Props = useStore((state)=>state["Menu"]["TextBox352"]);
const TextBox352IoProps = useIoStore((state)=>state["Menu"]["TextBox352"]);
const TextBox352Cb = useTextBox352Cb()
const Button43Props = useStore((state)=>state["Menu"]["Button43"]);
const Button43IoProps = useIoStore((state)=>state["Menu"]["Button43"]);
const Button43Cb = useButton43Cb()
const Button48Props = useStore((state)=>state["Menu"]["Button48"]);
const Button48IoProps = useIoStore((state)=>state["Menu"]["Button48"]);
const Button48Cb = useButton48Cb()
const Button49Props = useStore((state)=>state["Menu"]["Button49"]);
const Button49IoProps = useIoStore((state)=>state["Menu"]["Button49"]);
const Button49Cb = useButton49Cb()
const Button50Props = useStore((state)=>state["Menu"]["Button50"]);
const Button50IoProps = useIoStore((state)=>state["Menu"]["Button50"]);
const Button50Cb = useButton50Cb()
const Button51Props = useStore((state)=>state["Menu"]["Button51"]);
const Button51IoProps = useIoStore((state)=>state["Menu"]["Button51"]);
const Button51Cb = useButton51Cb()
const TextBox375Props = useStore((state)=>state["Menu"]["TextBox375"]);
const TextBox375IoProps = useIoStore((state)=>state["Menu"]["TextBox375"]);
const TextBox375Cb = useTextBox375Cb()
const TextBox376Props = useStore((state)=>state["Menu"]["TextBox376"]);
const TextBox376IoProps = useIoStore((state)=>state["Menu"]["TextBox376"]);
const TextBox376Cb = useTextBox376Cb()
const Image182Props = useStore((state)=>state["Menu"]["Image182"]);
const Image182IoProps = useIoStore((state)=>state["Menu"]["Image182"]);
const Image182Cb = useImage182Cb()
const Image166Props = useStore((state)=>state["Menu"]["Image166"]);
const Image166IoProps = useIoStore((state)=>state["Menu"]["Image166"]);
const Image166Cb = useImage166Cb()
const Image183Props = useStore((state)=>state["Menu"]["Image183"]);
const Image183IoProps = useIoStore((state)=>state["Menu"]["Image183"]);
const Image183Cb = useImage183Cb()
const Image168Props = useStore((state)=>state["Menu"]["Image168"]);
const Image168IoProps = useIoStore((state)=>state["Menu"]["Image168"]);
const Image168Cb = useImage168Cb()
const Image169Props = useStore((state)=>state["Menu"]["Image169"]);
const Image169IoProps = useIoStore((state)=>state["Menu"]["Image169"]);
const Image169Cb = useImage169Cb()
const Image170Props = useStore((state)=>state["Menu"]["Image170"]);
const Image170IoProps = useIoStore((state)=>state["Menu"]["Image170"]);
const Image170Cb = useImage170Cb()
const Image184Props = useStore((state)=>state["Menu"]["Image184"]);
const Image184IoProps = useIoStore((state)=>state["Menu"]["Image184"]);
const Image184Cb = useImage184Cb()
const Image172Props = useStore((state)=>state["Menu"]["Image172"]);
const Image172IoProps = useIoStore((state)=>state["Menu"]["Image172"]);
const Image172Cb = useImage172Cb()
const TextBox378Props = useStore((state)=>state["Menu"]["TextBox378"]);
const TextBox378IoProps = useIoStore((state)=>state["Menu"]["TextBox378"]);
const TextBox378Cb = useTextBox378Cb()
const Image185Props = useStore((state)=>state["Menu"]["Image185"]);
const Image185IoProps = useIoStore((state)=>state["Menu"]["Image185"]);
const Image185Cb = useImage185Cb()
const TextBox410Props = useStore((state)=>state["Menu"]["TextBox410"]);
const TextBox410IoProps = useIoStore((state)=>state["Menu"]["TextBox410"]);
const TextBox410Cb = useTextBox410Cb()
const TextBox379Props = useStore((state)=>state["Menu"]["TextBox379"]);
const TextBox379IoProps = useIoStore((state)=>state["Menu"]["TextBox379"]);
const TextBox379Cb = useTextBox379Cb()
const TextBox380Props = useStore((state)=>state["Menu"]["TextBox380"]);
const TextBox380IoProps = useIoStore((state)=>state["Menu"]["TextBox380"]);
const TextBox380Cb = useTextBox380Cb()
const TextBox381Props = useStore((state)=>state["Menu"]["TextBox381"]);
const TextBox381IoProps = useIoStore((state)=>state["Menu"]["TextBox381"]);
const TextBox381Cb = useTextBox381Cb()
const TextBox382Props = useStore((state)=>state["Menu"]["TextBox382"]);
const TextBox382IoProps = useIoStore((state)=>state["Menu"]["TextBox382"]);
const TextBox382Cb = useTextBox382Cb()
const TextBox383Props = useStore((state)=>state["Menu"]["TextBox383"]);
const TextBox383IoProps = useIoStore((state)=>state["Menu"]["TextBox383"]);
const TextBox383Cb = useTextBox383Cb()
const TextBox384Props = useStore((state)=>state["Menu"]["TextBox384"]);
const TextBox384IoProps = useIoStore((state)=>state["Menu"]["TextBox384"]);
const TextBox384Cb = useTextBox384Cb()
const TextBox385Props = useStore((state)=>state["Menu"]["TextBox385"]);
const TextBox385IoProps = useIoStore((state)=>state["Menu"]["TextBox385"]);
const TextBox385Cb = useTextBox385Cb()
const TextBox386Props = useStore((state)=>state["Menu"]["TextBox386"]);
const TextBox386IoProps = useIoStore((state)=>state["Menu"]["TextBox386"]);
const TextBox386Cb = useTextBox386Cb()
const TextBox377Props = useStore((state)=>state["Menu"]["TextBox377"]);
const TextBox377IoProps = useIoStore((state)=>state["Menu"]["TextBox377"]);
const TextBox377Cb = useTextBox377Cb()
const Image173Props = useStore((state)=>state["Menu"]["Image173"]);
const Image173IoProps = useIoStore((state)=>state["Menu"]["Image173"]);
const Image173Cb = useImage173Cb()
const Image174Props = useStore((state)=>state["Menu"]["Image174"]);
const Image174IoProps = useIoStore((state)=>state["Menu"]["Image174"]);
const Image174Cb = useImage174Cb()
const Image175Props = useStore((state)=>state["Menu"]["Image175"]);
const Image175IoProps = useIoStore((state)=>state["Menu"]["Image175"]);
const Image175Cb = useImage175Cb()
const Image176Props = useStore((state)=>state["Menu"]["Image176"]);
const Image176IoProps = useIoStore((state)=>state["Menu"]["Image176"]);
const Image176Cb = useImage176Cb()
const TextBox387Props = useStore((state)=>state["Menu"]["TextBox387"]);
const TextBox387IoProps = useIoStore((state)=>state["Menu"]["TextBox387"]);
const TextBox387Cb = useTextBox387Cb()
const TextBox388Props = useStore((state)=>state["Menu"]["TextBox388"]);
const TextBox388IoProps = useIoStore((state)=>state["Menu"]["TextBox388"]);
const TextBox388Cb = useTextBox388Cb()
const TextBox389Props = useStore((state)=>state["Menu"]["TextBox389"]);
const TextBox389IoProps = useIoStore((state)=>state["Menu"]["TextBox389"]);
const TextBox389Cb = useTextBox389Cb()
const TextBox390Props = useStore((state)=>state["Menu"]["TextBox390"]);
const TextBox390IoProps = useIoStore((state)=>state["Menu"]["TextBox390"]);
const TextBox390Cb = useTextBox390Cb()
const TextBox391Props = useStore((state)=>state["Menu"]["TextBox391"]);
const TextBox391IoProps = useIoStore((state)=>state["Menu"]["TextBox391"]);
const TextBox391Cb = useTextBox391Cb()
const TextBox392Props = useStore((state)=>state["Menu"]["TextBox392"]);
const TextBox392IoProps = useIoStore((state)=>state["Menu"]["TextBox392"]);
const TextBox392Cb = useTextBox392Cb()
const TextBox393Props = useStore((state)=>state["Menu"]["TextBox393"]);
const TextBox393IoProps = useIoStore((state)=>state["Menu"]["TextBox393"]);
const TextBox393Cb = useTextBox393Cb()
const TextBox394Props = useStore((state)=>state["Menu"]["TextBox394"]);
const TextBox394IoProps = useIoStore((state)=>state["Menu"]["TextBox394"]);
const TextBox394Cb = useTextBox394Cb()
const TextBox404Props = useStore((state)=>state["Menu"]["TextBox404"]);
const TextBox404IoProps = useIoStore((state)=>state["Menu"]["TextBox404"]);
const TextBox404Cb = useTextBox404Cb()
const TextBox405Props = useStore((state)=>state["Menu"]["TextBox405"]);
const TextBox405IoProps = useIoStore((state)=>state["Menu"]["TextBox405"]);
const TextBox405Cb = useTextBox405Cb()
const TextBox406Props = useStore((state)=>state["Menu"]["TextBox406"]);
const TextBox406IoProps = useIoStore((state)=>state["Menu"]["TextBox406"]);
const TextBox406Cb = useTextBox406Cb()
const TextBox407Props = useStore((state)=>state["Menu"]["TextBox407"]);
const TextBox407IoProps = useIoStore((state)=>state["Menu"]["TextBox407"]);
const TextBox407Cb = useTextBox407Cb()
const TextBox408Props = useStore((state)=>state["Menu"]["TextBox408"]);
const TextBox408IoProps = useIoStore((state)=>state["Menu"]["TextBox408"]);
const TextBox408Cb = useTextBox408Cb()
const TextBox409Props = useStore((state)=>state["Menu"]["TextBox409"]);
const TextBox409IoProps = useIoStore((state)=>state["Menu"]["TextBox409"]);
const TextBox409Cb = useTextBox409Cb()
const Button54Props = useStore((state)=>state["Menu"]["Button54"]);
const Button54IoProps = useIoStore((state)=>state["Menu"]["Button54"]);
const Button54Cb = useButton54Cb()
const Button55Props = useStore((state)=>state["Menu"]["Button55"]);
const Button55IoProps = useIoStore((state)=>state["Menu"]["Button55"]);
const Button55Cb = useButton55Cb()

  return (<>
  <Flex2 className="p-Menu Flex363 bpt" {...Flex363Props} {...Flex363Cb} {...Flex363IoProps}>
<Flex2 className="p-Menu Flex361 bpt" {...Flex361Props} {...Flex361Cb} {...Flex361IoProps}>
<TextBox2 className="p-Menu TextBox409 bpt" {...TextBox409Props} {...TextBox409Cb} {...TextBox409IoProps}/>
<TextBox2 className="p-Menu TextBox405 bpt" {...TextBox405Props} {...TextBox405Cb} {...TextBox405IoProps}/>
<TextBox2 className="p-Menu TextBox407 bpt" {...TextBox407Props} {...TextBox407Cb} {...TextBox407IoProps}/>
<TextBox2 className="p-Menu TextBox406 bpt" {...TextBox406Props} {...TextBox406Cb} {...TextBox406IoProps}/>
<TextBox2 className="p-Menu TextBox404 bpt" {...TextBox404Props} {...TextBox404Cb} {...TextBox404IoProps}/>
<TextBox2 className="p-Menu TextBox408 bpt" {...TextBox408Props} {...TextBox408Cb} {...TextBox408IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex362 bpt" {...Flex362Props} {...Flex362Cb} {...Flex362IoProps}>
<Button2 className="p-Menu Button54 bpt" {...Button54Props} {...Button54Cb} {...Button54IoProps}/>
<Button2 className="p-Menu Button55 bpt" {...Button55Props} {...Button55Cb} {...Button55IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex325 bpt" {...Flex325Props} {...Flex325Cb} {...Flex325IoProps}>
<TextBox2 className="p-Menu TextBox374 bpt" {...TextBox374Props} {...TextBox374Cb} {...TextBox374IoProps}/>
<TextBox2 className="p-Menu TextBox373 bpt" {...TextBox373Props} {...TextBox373Cb} {...TextBox373IoProps}/>
<Flex2 className="p-Menu Flex326 bpt" {...Flex326Props} {...Flex326Cb} {...Flex326IoProps}>
<Button2 className="p-Menu Button43 bpt" {...Button43Props} {...Button43Cb} {...Button43IoProps}/>
<Button2 className="p-Menu Button48 bpt" {...Button48Props} {...Button48Cb} {...Button48IoProps}/>
<Button2 className="p-Menu Button49 bpt" {...Button49Props} {...Button49Cb} {...Button49IoProps}/>
<Button2 className="p-Menu Button50 bpt" {...Button50Props} {...Button50Cb} {...Button50IoProps}/>
<Button2 className="p-Menu Button51 bpt" {...Button51Props} {...Button51Cb} {...Button51IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex323 bpt" {...Flex323Props} {...Flex323Cb} {...Flex323IoProps}>
<Flex2 className="p-Menu Flex318 bpt" {...Flex318Props} {...Flex318Cb} {...Flex318IoProps}>
<Flex2 className="p-Menu Flex310 bpt" {...Flex310Props} {...Flex310Cb} {...Flex310IoProps}>
<TextBox2 className="p-Menu TextBox353 bpt" {...TextBox353Props} {...TextBox353Cb} {...TextBox353IoProps}/>
</Flex2>
<Image2 className="p-Menu Image151 bpt" {...Image151Props} {...Image151Cb} {...Image151IoProps}/>
<TextBox2 className="p-Menu TextBox365 bpt" {...TextBox365Props} {...TextBox365Cb} {...TextBox365IoProps}/>
<TextBox2 className="p-Menu TextBox366 bpt" {...TextBox366Props} {...TextBox366Cb} {...TextBox366IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex319 bpt" {...Flex319Props} {...Flex319Cb} {...Flex319IoProps}>
<Flex2 className="p-Menu Flex311 bpt" {...Flex311Props} {...Flex311Cb} {...Flex311IoProps}>
<TextBox2 className="p-Menu TextBox354 bpt" {...TextBox354Props} {...TextBox354Cb} {...TextBox354IoProps}/>
</Flex2>
<Image2 className="p-Menu Image152 bpt" {...Image152Props} {...Image152Cb} {...Image152IoProps}/>
<TextBox2 className="p-Menu TextBox368 bpt" {...TextBox368Props} {...TextBox368Cb} {...TextBox368IoProps}/>
<TextBox2 className="p-Menu TextBox367 bpt" {...TextBox367Props} {...TextBox367Cb} {...TextBox367IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex320 bpt" {...Flex320Props} {...Flex320Cb} {...Flex320IoProps}>
<Flex2 className="p-Menu Flex312 bpt" {...Flex312Props} {...Flex312Cb} {...Flex312IoProps}>
<TextBox2 className="p-Menu TextBox355 bpt" {...TextBox355Props} {...TextBox355Cb} {...TextBox355IoProps}/>
</Flex2>
<Image2 className="p-Menu Image153 bpt" {...Image153Props} {...Image153Cb} {...Image153IoProps}/>
<TextBox2 className="p-Menu TextBox370 bpt" {...TextBox370Props} {...TextBox370Cb} {...TextBox370IoProps}/>
<TextBox2 className="p-Menu TextBox369 bpt" {...TextBox369Props} {...TextBox369Cb} {...TextBox369IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex321 bpt" {...Flex321Props} {...Flex321Cb} {...Flex321IoProps}>
<Flex2 className="p-Menu Flex313 bpt" {...Flex313Props} {...Flex313Cb} {...Flex313IoProps}>
<TextBox2 className="p-Menu TextBox356 bpt" {...TextBox356Props} {...TextBox356Cb} {...TextBox356IoProps}/>
</Flex2>
<Image2 className="p-Menu Image154 bpt" {...Image154Props} {...Image154Cb} {...Image154IoProps}/>
<TextBox2 className="p-Menu TextBox372 bpt" {...TextBox372Props} {...TextBox372Cb} {...TextBox372IoProps}/>
<TextBox2 className="p-Menu TextBox371 bpt" {...TextBox371Props} {...TextBox371Cb} {...TextBox371IoProps}/>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex324 bpt" {...Flex324Props} {...Flex324Cb} {...Flex324IoProps}>
<Flex2 className="p-Menu Flex322 bpt" {...Flex322Props} {...Flex322Cb} {...Flex322IoProps}>
<Flex2 className="p-Menu Flex317 bpt" {...Flex317Props} {...Flex317Cb} {...Flex317IoProps}>
<Flex2 className="p-Menu Flex309 bpt" {...Flex309Props} {...Flex309Cb} {...Flex309IoProps}>
<TextBox2 className="p-Menu TextBox352 bpt" {...TextBox352Props} {...TextBox352Cb} {...TextBox352IoProps}/>
</Flex2>
<Image2 className="p-Menu Image150 bpt" {...Image150Props} {...Image150Cb} {...Image150IoProps}/>
<TextBox2 className="p-Menu TextBox364 bpt" {...TextBox364Props} {...TextBox364Cb} {...TextBox364IoProps}/>
<TextBox2 className="p-Menu TextBox363 bpt" {...TextBox363Props} {...TextBox363Cb} {...TextBox363IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex316 bpt" {...Flex316Props} {...Flex316Cb} {...Flex316IoProps}>
<Flex2 className="p-Menu Flex308 bpt" {...Flex308Props} {...Flex308Cb} {...Flex308IoProps}>
<TextBox2 className="p-Menu TextBox351 bpt" {...TextBox351Props} {...TextBox351Cb} {...TextBox351IoProps}/>
</Flex2>
<Image2 className="p-Menu Image149 bpt" {...Image149Props} {...Image149Cb} {...Image149IoProps}/>
<TextBox2 className="p-Menu TextBox361 bpt" {...TextBox361Props} {...TextBox361Cb} {...TextBox361IoProps}/>
<TextBox2 className="p-Menu TextBox362 bpt" {...TextBox362Props} {...TextBox362Cb} {...TextBox362IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex315 bpt" {...Flex315Props} {...Flex315Cb} {...Flex315IoProps}>
<Flex2 className="p-Menu Flex307 bpt" {...Flex307Props} {...Flex307Cb} {...Flex307IoProps}>
<TextBox2 className="p-Menu TextBox350 bpt" {...TextBox350Props} {...TextBox350Cb} {...TextBox350IoProps}/>
</Flex2>
<Image2 className="p-Menu Image148 bpt" {...Image148Props} {...Image148Cb} {...Image148IoProps}/>
<TextBox2 className="p-Menu TextBox359 bpt" {...TextBox359Props} {...TextBox359Cb} {...TextBox359IoProps}/>
<TextBox2 className="p-Menu TextBox360 bpt" {...TextBox360Props} {...TextBox360Cb} {...TextBox360IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex314 bpt" {...Flex314Props} {...Flex314Cb} {...Flex314IoProps}>
<Flex2 className="p-Menu Flex306 bpt" {...Flex306Props} {...Flex306Cb} {...Flex306IoProps}>
<TextBox2 className="p-Menu TextBox349 bpt" {...TextBox349Props} {...TextBox349Cb} {...TextBox349IoProps}/>
</Flex2>
<Image2 className="p-Menu Image147 bpt" {...Image147Props} {...Image147Cb} {...Image147IoProps}/>
<TextBox2 className="p-Menu TextBox357 bpt" {...TextBox357Props} {...TextBox357Cb} {...TextBox357IoProps}/>
<TextBox2 className="p-Menu TextBox358 bpt" {...TextBox358Props} {...TextBox358Cb} {...TextBox358IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex327 bpt" {...Flex327Props} {...Flex327Cb} {...Flex327IoProps}>
<TextBox2 className="p-Menu TextBox376 bpt" {...TextBox376Props} {...TextBox376Cb} {...TextBox376IoProps}/>
<TextBox2 className="p-Menu TextBox375 bpt" {...TextBox375Props} {...TextBox375Cb} {...TextBox375IoProps}/>
<Flex2 className="p-Menu Flex329 bpt" {...Flex329Props} {...Flex329Cb} {...Flex329IoProps}>
<Flex2 className="p-Menu Flex330 bpt" {...Flex330Props} {...Flex330Cb} {...Flex330IoProps}>
<Flex2 className="p-Menu Flex341 bpt" {...Flex341Props} {...Flex341Cb} {...Flex341IoProps}>
<Image2 className="p-Menu Image166 bpt" {...Image166Props} {...Image166Cb} {...Image166IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex342 bpt" {...Flex342Props} {...Flex342Cb} {...Flex342IoProps}>
<Image2 className="p-Menu Image183 bpt" {...Image183Props} {...Image183Cb} {...Image183IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex343 bpt" {...Flex343Props} {...Flex343Cb} {...Flex343IoProps}>
<Image2 className="p-Menu Image168 bpt" {...Image168Props} {...Image168Cb} {...Image168IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex333 bpt" {...Flex333Props} {...Flex333Cb} {...Flex333IoProps}>
<Image2 className="p-Menu Image182 bpt" {...Image182Props} {...Image182Cb} {...Image182IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex348 bpt" {...Flex348Props} {...Flex348Cb} {...Flex348IoProps}>
<Flex2 className="p-Menu Flex346 bpt" {...Flex346Props} {...Flex346Cb} {...Flex346IoProps}>
<Image2 className="p-Menu Image184 bpt" {...Image184Props} {...Image184Cb} {...Image184IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex345 bpt" {...Flex345Props} {...Flex345Cb} {...Flex345IoProps}>
<Image2 className="p-Menu Image170 bpt" {...Image170Props} {...Image170Cb} {...Image170IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex344 bpt" {...Flex344Props} {...Flex344Cb} {...Flex344IoProps}>
<Image2 className="p-Menu Image169 bpt" {...Image169Props} {...Image169Cb} {...Image169IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex347 bpt" {...Flex347Props} {...Flex347Cb} {...Flex347IoProps}>
<Image2 className="p-Menu Image172 bpt" {...Image172Props} {...Image172Cb} {...Image172IoProps}/>
</Flex2>
</Flex2>
</Flex2>
<Flex2 className="p-Menu Flex356 bpt" {...Flex356Props} {...Flex356Cb} {...Flex356IoProps}>
<Flex2 className="p-Menu Flex352 bpt" {...Flex352Props} {...Flex352Cb} {...Flex352IoProps}>
<TextBox2 className="p-Menu TextBox410 bpt" {...TextBox410Props} {...TextBox410Cb} {...TextBox410IoProps}/>
<TextBox2 className="p-Menu TextBox378 bpt" {...TextBox378Props} {...TextBox378Cb} {...TextBox378IoProps}/>
<Image2 className="p-Menu Image185 bpt" {...Image185Props} {...Image185Cb} {...Image185IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex353 bpt" {...Flex353Props} {...Flex353Cb} {...Flex353IoProps}>
<TextBox2 className="p-Menu TextBox379 bpt" {...TextBox379Props} {...TextBox379Cb} {...TextBox379IoProps}/>
<TextBox2 className="p-Menu TextBox380 bpt" {...TextBox380Props} {...TextBox380Cb} {...TextBox380IoProps}/>
<TextBox2 className="p-Menu TextBox381 bpt" {...TextBox381Props} {...TextBox381Cb} {...TextBox381IoProps}/>
<TextBox2 className="p-Menu TextBox382 bpt" {...TextBox382Props} {...TextBox382Cb} {...TextBox382IoProps}/>
<TextBox2 className="p-Menu TextBox383 bpt" {...TextBox383Props} {...TextBox383Cb} {...TextBox383IoProps}/>
<TextBox2 className="p-Menu TextBox384 bpt" {...TextBox384Props} {...TextBox384Cb} {...TextBox384IoProps}/>
<TextBox2 className="p-Menu TextBox385 bpt" {...TextBox385Props} {...TextBox385Cb} {...TextBox385IoProps}/>
<TextBox2 className="p-Menu TextBox386 bpt" {...TextBox386Props} {...TextBox386Cb} {...TextBox386IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex355 bpt" {...Flex355Props} {...Flex355Cb} {...Flex355IoProps}>
<TextBox2 className="p-Menu TextBox392 bpt" {...TextBox392Props} {...TextBox392Cb} {...TextBox392IoProps}/>
<TextBox2 className="p-Menu TextBox391 bpt" {...TextBox391Props} {...TextBox391Cb} {...TextBox391IoProps}/>
<TextBox2 className="p-Menu TextBox393 bpt" {...TextBox393Props} {...TextBox393Cb} {...TextBox393IoProps}/>
<TextBox2 className="p-Menu TextBox394 bpt" {...TextBox394Props} {...TextBox394Cb} {...TextBox394IoProps}/>
<TextBox2 className="p-Menu TextBox390 bpt" {...TextBox390Props} {...TextBox390Cb} {...TextBox390IoProps}/>
<TextBox2 className="p-Menu TextBox389 bpt" {...TextBox389Props} {...TextBox389Cb} {...TextBox389IoProps}/>
<TextBox2 className="p-Menu TextBox388 bpt" {...TextBox388Props} {...TextBox388Cb} {...TextBox388IoProps}/>
<TextBox2 className="p-Menu TextBox387 bpt" {...TextBox387Props} {...TextBox387Cb} {...TextBox387IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex354 bpt" {...Flex354Props} {...Flex354Cb} {...Flex354IoProps}>
<Flex2 className="p-Menu Flex351 bpt" {...Flex351Props} {...Flex351Cb} {...Flex351IoProps}>
<TextBox2 className="p-Menu TextBox377 bpt" {...TextBox377Props} {...TextBox377Cb} {...TextBox377IoProps}/>
<Flex2 className="p-Menu Flex349 bpt" {...Flex349Props} {...Flex349Cb} {...Flex349IoProps}>
<Image2 className="p-Menu Image174 bpt" {...Image174Props} {...Image174Cb} {...Image174IoProps}/>
<Image2 className="p-Menu Image173 bpt" {...Image173Props} {...Image173Cb} {...Image173IoProps}/>
</Flex2>
<Flex2 className="p-Menu Flex350 bpt" {...Flex350Props} {...Flex350Cb} {...Flex350IoProps}>
<Image2 className="p-Menu Image175 bpt" {...Image175Props} {...Image175Cb} {...Image175IoProps}/>
<Image2 className="p-Menu Image176 bpt" {...Image176Props} {...Image176Cb} {...Image176IoProps}/>
</Flex2>
</Flex2>
</Flex2>
</Flex2>
  </>);
}
