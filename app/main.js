import {useEffect,useState} from "react";
import profile from "../json/profile.json";
export default function Main() {

    const [textList, setTextList] = useState(profile.textList);
    var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
            this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
            this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
            delta = this.period;
            this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
            this.isDeleting = false;
            this.loopNum++;
            delta = 500;
        }

        setTimeout(function() {
            that.tick();
        }, delta);
    };

    const writter = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var period = elements[i].getAttribute('data-period');

                new TxtType(elements[i], textList, period);

        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.2em solid #fff}";
        document.body.appendChild(css);
    };

    useEffect(() => {
        writter();
    }, []);


    return(
        <main style={{backgroundImage:'url('+profile.mainBackground+')'}} className="h-screen bg-fixed bg-center bg-no-repeat bg-cover w-screen relative  overflow-y-auto overflow-x-hidden">
            <div className="bg-black/70  z-10 absolute w-screen h-screen flex flex-col items-center justify-center">
                <h1 className="text-6xl font-bold text-white/90">I am {profile.name}</h1>

                <a  className="typewrite mt-2" data-period="1200">
                    <span className="wrap"></span>
                </a>
                <span className="p-3 border border-white mt-2 text-white rounded-xl px-5 hover:bg-white/0 hover:text-yellow-500 hover:border-yellow-500 cursor-pointer">Learn More</span>
                <a href={profile.cvLink} className="p-3 border  mt-2  rounded-xl px-5 bg-white text-yellow-500 border-yellow-500 hover:bg-white/0 cursor-pointer">Look CV</a>
            </div>



        </main>
    )
}