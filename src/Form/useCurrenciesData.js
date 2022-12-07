import { useEffect, useState } from "react";
import axios from "axios";
//import { currencies } from "../currencies";

// const getCurrencyFromNetwork = () => {
//     /*    
//        axios.get("https://api.exchangerate.host/lates?base=PLN&callback=JSON")
//            .then(response => console.log(response.data))
//            .catch(error => console.error(error)); */
//     const data = JSON.parse('{"motd":{"msg":"If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.","url":"https://exchangerate.host/#/donate"},"success":true,"historical":true,"base":"PLN","date":"2022-12-06","rates":{"AED":0.817826,"AFN":19.738678,"ALL":24.672135,"AMD":88.50017,"ANG":0.401193,"AOA":112.469,"ARS":37.6571,"AUD":0.331216,"AWG":0.400814,"AZN":0.378624,"BAM":0.414352,"BBD":0.445401,"BDT":23.083048,"BGN":0.415212,"BHD":0.083884,"BIF":463.344909,"BMD":0.222692,"BND":0.300339,"BOB":1.537972,"BRL":1.175922,"BSD":0.222803,"BTC":0.000013,"BTN":18.300106,"BWP":2.880233,"BYN":0.562112,"BZD":0.448784,"CAD":0.302682,"CDF":459.861651,"CHF":0.210064,"CLF":0.007253,"CLP":199.500173,"CNH":1.552833,"CNY":1.553425,"COP":1070.41242,"CRC":134.914999,"CUC":0.222844,"CUP":5.732585,"CVE":23.354655,"CZK":5.159411,"DJF":39.838133,"DKK":1.578772,"DOP":12.225338,"DZD":30.803547,"EGP":5.468012,"ERN":3.339448,"ETB":11.892402,"EUR":0.212402,"FJD":0.491846,"FKP":0.18277,"GBP":0.18291,"GEL":0.598953,"GGP":0.182871,"GHS":3.132865,"GIP":0.182818,"GMD":13.825158,"GNF":1929.494589,"GTQ":1.758496,"GYD":46.563001,"HKD":1.730168,"HNL":5.524537,"HRK":1.603206,"HTG":31.776242,"HUF":87.753369,"IDR":3469.82816,"ILS":0.759636,"IMP":0.182761,"INR":18.305793,"IQD":326.606681,"IRR":9327.943782,"ISK":31.608315,"JEP":0.182829,"JMD":34.218694,"JOD":0.158057,"JPY":30.473069,"KES":27.315953,"KGS":18.800797,"KHR":918.27406,"KMF":103.79295,"KPW":200.361591,"KRW":292.188022,"KWD":0.068417,"KYD":0.185657,"KZT":104.689086,"LAK":3883.928371,"LBP":338.351557,"LKR":82.238196,"LRD":34.284107,"LSL":3.863629,"LYD":1.083566,"MAD":2.357955,"MDL":4.374929,"MGA":978.136884,"MKD":13.042645,"MMK":467.395264,"MNT":758.472077,"MOP":1.790518,"MRU":8.479026,"MUR":9.717805,"MVR":3.400702,"MWK":229.686353,"MXN":4.392762,"MYR":0.975493,"MZN":14.214553,"NAD":3.870456,"NGN":98.965245,"NIO":8.169944,"NOK":2.212696,"NPR":29.28155,"NZD":0.352266,"OMR":0.085874,"PAB":0.222658,"PEN":0.859626,"PGK":0.788493,"PHP":12.469898,"PKR":50.226961,"PLN":1,"PYG":1610.350278,"QAR":0.821119,"RON":1.043643,"RSD":24.890386,"RUB":14.028887,"RWF":242.277298,"SAR":0.837049,"SBD":1.830937,"SCR":2.923896,"SDG":126.673194,"SEK":2.320265,"SGD":0.301996,"SHP":0.182834,"SLL":3932.652195,"SOS":127.215728,"SRD":7.116204,"SSP":28.999111,"STD":5081.167058,"STN":5.189444,"SVC":1.947598,"SYP":559.349326,"SZL":3.863552,"THB":7.800761,"TJS":2.241317,"TMT":0.774767,"TND":0.712627,"TOP":0.523336,"TRY":4.149079,"TTD":1.519495,"TWD":6.814043,"TZS":519.159154,"UAH":8.264461,"UGX":832.410692,"USD":0.222711,"UYU":8.730198,"UZS":2511.041162,"VES":2.599811,"VND":5343.19244,"VUV":26.279392,"WST":0.600671,"XAF":139.217134,"XAG":0.01,"XAU":0.000364,"XCD":0.601789,"XDR":0.168649,"XOF":139.217139,"XPD":0.00034,"XPF":25.326619,"XPT":0.000369,"YER":55.739608,"ZAR":3.882766,"ZMW":3.84789,"ZWL":71.685018}}');
//     const rates = data["rates"];

//     return Object.keys(rates).map(k => (
//         { short: k, rate: rates[k] }
//     ));
//     // setTimeout(()=>{                   
//     // }, 3000); 
// }

export const useCurrenciesData = () => {
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);
    const [dateOfRates, setDateOfRates] = useState("");
    const [currency, setCurrency] = useState([{
        short: "PLN",
        rate: 1.0,
    },
    {
        short: "EUR",
        rate: 1.0,
    },]);

    useEffect(() => {
        (async () => {
            let data = "";
            setMessage("Trwa ładowanie danych...");
            try {
                //const response = await axios.get("https://api.exchangerate.host/lates?base=PLN");
                //data=response.data;
                data = JSON.parse('{"motd":{"msg":"If you or your company use this project or like what we doing, please consider backing us so we can continue maintaining and evolving this project.","url":"https://exchangerate.host/#/donate"},"success":true,"historical":true,"base":"PLN","date":"2022-12-06","rates":{"AED":0.817826,"AFN":19.738678,"ALL":24.672135,"AMD":88.50017,"ANG":0.401193,"AOA":112.469,"ARS":37.6571,"AUD":0.331216,"AWG":0.400814,"AZN":0.378624,"BAM":0.414352,"BBD":0.445401,"BDT":23.083048,"BGN":0.415212,"BHD":0.083884,"BIF":463.344909,"BMD":0.222692,"BND":0.300339,"BOB":1.537972,"BRL":1.175922,"BSD":0.222803,"BTC":0.000013,"BTN":18.300106,"BWP":2.880233,"BYN":0.562112,"BZD":0.448784,"CAD":0.302682,"CDF":459.861651,"CHF":0.210064,"CLF":0.007253,"CLP":199.500173,"CNH":1.552833,"CNY":1.553425,"COP":1070.41242,"CRC":134.914999,"CUC":0.222844,"CUP":5.732585,"CVE":23.354655,"CZK":5.159411,"DJF":39.838133,"DKK":1.578772,"DOP":12.225338,"DZD":30.803547,"EGP":5.468012,"ERN":3.339448,"ETB":11.892402,"EUR":0.212402,"FJD":0.491846,"FKP":0.18277,"GBP":0.18291,"GEL":0.598953,"GGP":0.182871,"GHS":3.132865,"GIP":0.182818,"GMD":13.825158,"GNF":1929.494589,"GTQ":1.758496,"GYD":46.563001,"HKD":1.730168,"HNL":5.524537,"HRK":1.603206,"HTG":31.776242,"HUF":87.753369,"IDR":3469.82816,"ILS":0.759636,"IMP":0.182761,"INR":18.305793,"IQD":326.606681,"IRR":9327.943782,"ISK":31.608315,"JEP":0.182829,"JMD":34.218694,"JOD":0.158057,"JPY":30.473069,"KES":27.315953,"KGS":18.800797,"KHR":918.27406,"KMF":103.79295,"KPW":200.361591,"KRW":292.188022,"KWD":0.068417,"KYD":0.185657,"KZT":104.689086,"LAK":3883.928371,"LBP":338.351557,"LKR":82.238196,"LRD":34.284107,"LSL":3.863629,"LYD":1.083566,"MAD":2.357955,"MDL":4.374929,"MGA":978.136884,"MKD":13.042645,"MMK":467.395264,"MNT":758.472077,"MOP":1.790518,"MRU":8.479026,"MUR":9.717805,"MVR":3.400702,"MWK":229.686353,"MXN":4.392762,"MYR":0.975493,"MZN":14.214553,"NAD":3.870456,"NGN":98.965245,"NIO":8.169944,"NOK":2.212696,"NPR":29.28155,"NZD":0.352266,"OMR":0.085874,"PAB":0.222658,"PEN":0.859626,"PGK":0.788493,"PHP":12.469898,"PKR":50.226961,"PLN":1,"PYG":1610.350278,"QAR":0.821119,"RON":1.043643,"RSD":24.890386,"RUB":14.028887,"RWF":242.277298,"SAR":0.837049,"SBD":1.830937,"SCR":2.923896,"SDG":126.673194,"SEK":2.320265,"SGD":0.301996,"SHP":0.182834,"SLL":3932.652195,"SOS":127.215728,"SRD":7.116204,"SSP":28.999111,"STD":5081.167058,"STN":5.189444,"SVC":1.947598,"SYP":559.349326,"SZL":3.863552,"THB":7.800761,"TJS":2.241317,"TMT":0.774767,"TND":0.712627,"TOP":0.523336,"TRY":4.149079,"TTD":1.519495,"TWD":6.814043,"TZS":519.159154,"UAH":8.264461,"UGX":832.410692,"USD":0.222711,"UYU":8.730198,"UZS":2511.041162,"VES":2.599811,"VND":5343.19244,"VUV":26.279392,"WST":0.600671,"XAF":139.217134,"XAG":0.01,"XAU":0.000364,"XCD":0.601789,"XDR":0.168649,"XOF":139.217139,"XPD":0.00034,"XPF":25.326619,"XPT":0.000369,"YER":55.739608,"ZAR":3.882766,"ZMW":3.84789,"ZWL":71.685018}}');
//   
            } catch (error) {
                setMessage("Brak komunikacji z serwerem. Sprawdź czy masz aktywne połączenie z Internetem.");
                setStatus(false);
            }
            setDateOfRates(data["date"]);
            const rates = data["rates"];
            setCurrency(
                Object.keys(rates).map(k => (
                    {
                        short: k,
                        rate: rates[k],
                    }
                )));
            setMessage("Pobieranie danych zakończone powodzeniem. Trwa ładowanie aplikacji...");
            setStatus(true);
        })();
    }, []);

    return {
        message: message,
        status: status,
        dateOfRates:dateOfRates,
        currencies: currency,
    }
};