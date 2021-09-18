import React from 'react'
import AboutImag from  '../images/content.svg'
import TeamImage from '../images/team.jpg'
import './about.css'
import Cookies from 'js-cookie'

const about = () => {
    return (
        <div>
             <div class="hd">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About </a></li>
                    <li><a href="/">LIBRERIES</a></li>
                    <li><a href="/">Contact</a></li>
                    {Cookies.get('jwt') ? <li><a href="/realtime">Panel</a></li> : <li><a href="/login">Login</a></li>}
                </ul>
            </div>
            <div class="home">
                <h2 class="title">About US</h2>
             <img src ={AboutImag} class="image_hero" />
	    </div>
        <div class="container">
            <div class="sectaion_1">
                <h2 class ="titleAabout">Who we are </h2>
                <div class="line"></div>
                <p class="subtitleAbout">Designers , thinkers & collaborators </p>
            </div>
            <div class="section_2">
                <p class="parag1">
                Led by the Higher School of Computer science and the Military Research and Development Unit ,We are a group of students with a passion for working in this field , Our group is characterized by hard work, perfection and creativity   
                </p>
            </div>
            <div class="section_3">
            <h2 class ="titleAabout">Our Team </h2>
                <div class="line"></div>
                
             
              <div class="team-section">
                 <div class="row">
                   <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                     <div class="our-team">

                        <div class="picture">
                            <img class="img-fluid" src="https://media-exp1.licdn.com/dms/image/C4E03AQEi9vt3qifevw/profile-displayphoto-shrink_200_200/0/1604571886888?e=1633564800&v=beta&t=LfwnVSaw0Jyc41njP-qXee0IpiZnjhtQRIl5om8f_oc"/>
                        </div>

                        <div class="team-content">
                            <h3 class="name">Meguitif Mhamed</h3>
                            <h4 class="title">Web Developer</h4>
                        </div>

                        <ul class="social">
                            <li><a href="#" class="fab fa-facebook" ></a></li>
                            <li><a href="#" class="fab fa-twitter"></a></li>
                            <li><a href="#" class="fab fa-google-plus-square"></a></li>
                            <li><a href="#" class="fab fa-github"></a></li>
                        </ul>

                    </div>
                </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team">
                                <div class="picture">
                                    <img class="img-fluid" src="https://media-exp1.licdn.com/dms/image/C4E03AQHub6frHveWpw/profile-displayphoto-shrink_200_200/0/1613364931703?e=1633564800&v=beta&t=5zfAkcAIaiWe65HmvRZBlbmfIlzAVMdmqUSkHiGRd-A"/>
                                </div>
                                <div class="team-content">
                                    <h3 class="name">Ramzi Bouzroura</h3>
                                    <h4 class="title">Web Developer</h4>
                                </div>
                                <ul class="social">
                            <li><a href="#" class="fab fa-facebook" ></a></li>
                            <li><a href="#" class="fab fa-twitter"></a></li>
                            <li><a href="#" class="fab fa-google-plus-square"></a></li>
                            <li><a href="#" class="fab fa-github"></a></li>
                        </ul>
                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team">
                            <div class="picture">
                                <img class="img-fluid" src="https://scontent.forn1-2.fna.fbcdn.net/v/t1.6435-1/s200x200/192622256_3527845680649355_4730463601399887665_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeFBeHRcLbE5cvH1rj7G9LlnI8gb9tTDsucjyBv21MOy5_FhQo2-DMCRuL6IfLnfTjPcyqJ7LqGE3c_oLQlhbfss&_nc_ohc=ycW4j1RwLfwAX-Ltx4B&_nc_ht=scontent.forn1-2.fna&oh=e9f5c722d74bcef0a2ed72f8c2c41ecb&oe=612D2048"/>
                            </div>
                            <div class="team-content">
                                <h3 class="name">Abdellah Bakiri</h3>
                                <h4 class="title">Web Developer</h4>
                            </div>
                            <ul class="social">
                            <li><a href="#" class="fab fa-facebook" ></a></li>
                            <li><a href="#" class="fab fa-twitter"></a></li>
                            <li><a href="#" class="fab fa-google-plus-square"></a></li>
                            <li><a href="#" class="fab fa-github"></a></li>
                        </ul>
                            </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team">

                            <div class="picture">
                                <img class="img-fluid" src="https://scontent.forn1-2.fna.fbcdn.net/v/t1.6435-1/p200x200/134803925_447528779598162_9031847260676077472_n.jpg?_nc_cat=109&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeH2BCoW5S-KL0aGHyqi0GXdDfnN4p1T2dIN-c3inVPZ0qDQO-ynsaA12rtMdR2KM8c9o34BQhPU35zWG895jZAP&_nc_ohc=ZXIa7mKhkzEAX_NwHqG&_nc_ht=scontent.forn1-2.fna&oh=15c46225d42c9115c56ac37ccb458d69&oe=612EF9D1"/>
                            </div>

                            <div class="team-content">
                                <h3 class="name">Mohamed Slamat</h3>
                                <h4 class="title">Web Developer</h4>
                            </div>

                            <ul class="social">
                            <li><a href="#" class="fab fa-facebook" ></a></li>
                            <li><a href="#" class="fab fa-twitter"></a></li>
                            <li><a href="#" class="fab fa-google-plus-square"></a></li>
                            <li><a href="#" class="fab fa-github"></a></li>
                        </ul>

                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team">

                            <div class="picture">
                                <img class="img-fluid" src="https://scontent.forn1-2.fna.fbcdn.net/v/t1.6435-9/s526x395/204751956_2936250356642233_4560688436174759130_n.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGN9GtCZNeL7P_f0efxO8c2z6BdiRimFmXPoF2JGKYWZQmSzHXUi6dRE48YpgxHwJjbUuVvfpEUNtghaulm8N6o&_nc_ohc=XDB0fsHtnkEAX9prhFu&_nc_ht=scontent.forn1-2.fna&oh=50ed629dfc3bf4e457106f21abd1adfb&oe=612CFF93"/>
                            </div>

                            <div class="team-content">
                                <h3 class="name">ABDESSELAM LOKMANE</h3>
                                <h4 class="title">Web Developer</h4>
                            </div>

                            <ul class="social">
                            <li><a href="#" class="fab fa-facebook" ></a></li>
                            <li><a href="#" class="fab fa-twitter"></a></li>
                            <li><a href="#" class="fab fa-google-plus-square"></a></li>
                            <li><a href="#" class="fab fa-github"></a></li>
                        </ul>

                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team">

                            <div class="picture">
                                <img class="img-fluid" src="data:image/jpeg;base64,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"/>
                            </div>

                            <div class="team-content">
                                <h3 class="name">ELARBI BOUDIHIR</h3>
                                <h4 class="title">Professor</h4>
                            </div>

                            <ul class="social">
                            <li><a href="#" class="fab fa-facebook" ></a></li>
                            <li><a href="#" class="fab fa-twitter"></a></li>
                            <li><a href="#" class="fab fa-google-plus-square"></a></li>
                            <li><a href="#" class="fab fa-github"></a></li>
                        </ul>

                        </div>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <div class="our-team">

                            <div class="picture">
                                <img class="img-fluid" src="https://scontent.forn1-2.fna.fbcdn.net/v/t1.6435-1/s200x200/57049086_10214560378786453_7621513298902515712_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=7206a8&_nc_eui2=AeHy3iwAzfvXAVVcY8LWiyiDres49JuqDpat6zj0m6oOlrK5LsrpfmvWznnukLiRTE5jKZfi96d2-qJ97KyToZPo&_nc_ohc=EdZKPEAxMJ8AX8HT7p1&_nc_ht=scontent.forn1-2.fna&oh=824e80483e91a4f4d93fbed5816c3c33&oe=612C4CF5"/>
                            </div>

                            <div class="team-content">
                                <h3 class="name">Mouhcen Moussaoui</h3>
                                <h4 class="title">RDU</h4>
                            </div>

                            <ul class="social">
                            <li><a href="#" class="fab fa-facebook" ></a></li>
                            <li><a href="#" class="fab fa-twitter"></a></li>
                            <li><a href="#" class="fab fa-google-plus-square"></a></li>
                            <li><a href="#" class="fab fa-github"></a></li>
                        </ul>

                        </div>
                    </div>
                    
                 </div>

                 </div>

                </div>
            </div>
            <div class="cont" id="cont">
		<div class="contname">
                C<i class="fas fa-user-circle"></i>
            NTACT 
        </div>
		<div class="contain">
			<div class="social">
				<div class="subname"></div>
				<div class="subdes">Social</div>
				<div class="subcontain" data-anijs="if: scroll, on: window, do: rubberBand animated, before: $scrollReveal repeat">
					<a target="_blank" href="https://github.com/" title="GitHub"><i class="fab fa-github"></i></a>
					<a target="_blank" href="https://www.linkedin.com" title="LinkedIn"><i class="fab fa-linkedin"></i></a>
					<a target="_blank" href="https://mail.google.com/" title="Gmail"><i class="far fa-envelope"></i></a>
				</div>
			</div>

			<div class="link">
				<div class="subname"></div>
				<div class="subdes">Navigate</div>
				<div class="subcontain" data-anijs="if: scroll, on: window, do: rubberBand animated, before: $scrollReveal repeat">
					<a href="/">Home</a>
					<a href="/about_us">About Us</a>
					<a href="/">LIBRERIES</a>
				</div>
			</div>
		</div>
	</div>
        </div>
        
    )
}

export default about
