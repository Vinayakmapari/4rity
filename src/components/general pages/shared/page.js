import React from 'react';
const Page = (props) =>{
    return(
        <div>
        <header className="page-title" data-parallax="scroll" data-image-src="http://placehold.it/1080x718?text=kids-img-4" data-speed="0.4" style={{height:'35%'}}>
        <div className="container">
            <div className="outer" style={{margin:'70px 0px'}}>
                <div class="inner text-center">
                    <h2>Progrmas</h2>
                    <h4 class="mt1">Let's build our dream society together.</h4>
                </div> {/* end inner */}
            </div> {/* end outer */}
        </div> {/* end container */}
    </header>

      
                    <div className="row">
                        <div className="col-md-6 col-sm-6">
                            <div className="story-card">
                                <div className="col-md-5 zero-padding">
                                    <img src="https://placehold.it/1080x718?text=cause-img-4" alt="" className="img-responsive"/>
                                </div>
                                <div className="col-md-7">
                                    <h5 className="mt1"><a href="nothing">Pure Food & Water</a></h5>
                                    <p>We supply needy childen with basic necessities like pure food and water
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, eveniet! Quae doloremque quo inventore? Quae odit iste obcaecati ex accusantium culpa suscipit ipsam recusandae et sit aliquam veniam deserunt labore ut quibusdam voluptate rerum, aspernatur totam perspiciatis tenetur voluptatem neque explicabo magni porro. Est molestiae dolore dolorum maxime, quasi ipsam.
                                    </p>
                                </div>
                                <div className="clearfix"></div>
                            </div> {/* end story-card */}
                        </div> 
                        </div>
                      
                       </div> 
                
    )
}


export default Page