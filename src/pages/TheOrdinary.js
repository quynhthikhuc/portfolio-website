import React from 'react';

function TheOrdinary() {
    return(
        <div className="project-pages">
            <main className="project-main">
                <h1><b className="page-title">THE ORDINARY</b></h1>
                <div className="project-metadata">
                    <p className="project-highlight">A case study of The Ordinary website redesign project</p>
                    <ul className="section-ul">Section
                        <a href="#introduction"><li>Introduction to The Ordinary</li></a>
                        <a href="#weaknesses"><li>Weaknesses</li></a>
                        <a href="#goals"><li>Goals</li></a>
                        <a href="#limitations"><li>Limitations</li></a>
                        <a href="#card-sort-site-map"><li>Card Sort &amp; Site Map</li></a>
                        <a href="#wireframes-color-typography"><li>Wireframes, Color Palette, &amp; Typography</li></a>
                        <a href="#takeaways"><li>Takeaways</li></a>
                        <a href="#final-design"><li>Final Design</li></a>
                    </ul>
                </div>

                <div className="project-content">
                    <div id="introduction">
                        <h2><b id="introduction-title">Introduction to The Ordinary</b></h2>
                        <blockquote>
                            <p><i>Clinical Formulation with Integrity</i></p>
                            <p> - The Ordinary Brand Statement</p>
                        </blockquote>
                        <p>
                            The Ordinary is a beauty brand from DECIEM founded in 2013. As stated in the brand statement, The Ordinary’s mission is to make clinical skincare more accessible as well as to be transparent and honest to its customers. The main target of The Ordinary is women who are into skincare and want to use organic products that are affordable.
                        </p>
                        <figure>
                            <img srcSet="images/the-ordinary/user-persona-large.jpg  900w,
                                    images/the-ordinary/user-persona-medium.jpg  600w,
                                    images/the-ordinary/user-persona-small.jpg 350w"
                                sizes="100vw"
                                src="images/the-ordinary/user-persona-small.jpg"
                            alt="User Persona"/>
                            <figcaption>User Persona</figcaption>
                        </figure>
                    </div>
    
                    <div id="weaknesses">
                        <h2><b id="weaknesses-title">Weaknesses</b></h2>
                        <p>
                            The first thing I did when I started the project was to find out all of the site’s weaknesses (<a href="assets/the-ordinary/evaluation-form.xlsx" target="_blank">you can download the evaluation form by clicking on this link</a>). Here are the three major usability issues of the current site that I identified:
                        </p>
                        <ul>
                            <li>
                                The navigation, and that was because the categories on the navigation bar were not friendly to people who are new to skincare. Since those who are new to skincare usually have no idea what antioxidants or peptides are, the current navigation bar basically forced them to do a lot of research before they could start browsing the site.
                            </li>
                            <li>
                                The homepage, which was bland and could have a negative impact on new customers as they have no idea what products the brand has to offer.
                            </li>
                            <li>
                                The product page, which only consisted of lengthy paragraphs, and customers would have to read all of those lengthy paragraphs in order to find out the information that they need.
                            </li>
                        </ul>
                    </div>
    
                    <div id="goals">
                        <h2><b id="goals-title">Goals</b></h2>
                        <p>
                            Based on the usability issues identified in the previous section, I came up with three immediate goals that would be the main focus of my project:
                        </p>
                        <ul>
                            <li>
                                A new navigation bar that would divide products into categories that are more friendly to those who are new to skincare.
                            </li>
                            <li>
                                A new homepage that would promote the brand’s newest products and best-sellers.
                            </li>
                            <li>
                                A new product page layout that would no longer consist of lengthy paragraphs but still provide enough information about the product.
                            </li>
                        </ul>
                    </div>
    
                    <div id="limitations">
                        <h2><b id="limitations-title">Limitations</b></h2>
                        <p>
                            The next thing I did in my process of redesigning The Ordinary website was identifying the limitations for my final design. The reason was that I that believed that the new design could only work if it aligned well with the brand. Since The Ordinary is all about transparency and simplicity, here are the limitations that I identified for my final design:
                        </p>
                        <ul>
                            <li>
                                The new design must include all of the information that was on the current website, and that information must be organized in a logical order.
                            </li>
                            <li>
                                The new design must look simple and clean so that it will fit in with other designs of the brand as well as be able to communicate with the customers about the brand as a whole.
                            </li>
                        </ul>
                    </div>
    
                    <div id="card-sort-site-map">
                        <h2><b id="card-sort-site-map-title">Card Sort &amp; Site Map</b></h2>
                        <p>
                            In order to design a new navigation system for the site, I did the card sorting technique with four different potential customers to gather insight on how they would like content on the site to be. Based on the data collected (<a href="assets/the-ordinary/card-sort-data.xlsx" target="_blank">you can download the result of the card sorting by clicking on this link</a>), I could see that the majority of my participants agreed that the site should have a skincare category, a makeup category, a hair care category, a product guides category, and an about category. 
                        </p>
                        <p>
                            I also asked my participants to rank the importance of each categories, and most of them said that skincare was the most important one, followed by makeup, hair care, product guides, and about. 
                        </p>
                        <p>
                            After analyzing the results and the answers I got from my participants, I decided to go with the decisions that the majority of my participants made. The reason was since it made sense to most of the participants, I believe it would make the most sense to most of the site’s customers. 
                        </p>
                        <figure>
                            <img srcSet="images/the-ordinary/site-map-large.jpg  900w,
                                    images/the-ordinary/site-map-medium.jpg  600w,
                                    images/the-ordinary/site-map-small.jpg 350w"
                                sizes="100vw"
                                src="images/the-ordinary/site-map-small.jpg"
                            alt="Site Map"/>
                            <figcaption>Site Map</figcaption>
                        </figure>
                    </div>
    
                    <div id="wireframes-color-typography">
                        <h2><b id="wireframes-color-typography-title">Wireframes, Color palette, &amp; Typography</b></h2>
                        <div>
                            <p>
                                I came up with several different layouts for the homepage, the catalog, and the product page, each had its own strengths and weaknesses. However, in the end, I decided to go with the wireframes that I believed to:
                            </p>
                            <ul>
                                <li>
                                    Not be so different from the current website so that existing customers wouldn’t be overwhelmed by the new design
                                </li>
                                <li>
                                    Solve the two major usability issues that I mentioned earlier – the bland homepage and the lengthy product page – while still obey the limitations that I’ve set in the previous section
                                </li>
                            </ul>
                            <figure>
                                <img srcSet="images/the-ordinary/wireframes-large.jpg  900w,
                                        images/the-ordinary/wireframes-medium.jpg  600w,
                                        images/the-ordinary/wireframes-small.jpg 350w"
                                    sizes="100vw"
                                    src="images/the-ordinary/wireframes-small.jpg"
                                alt="Wireframes"/>
                                <figcaption>Wireframes</figcaption>
                            </figure>
                        </div>
    
                        <div>
                            <p>
                                When it came to choosing the color scheme for the new design, I decided to use a grayscale color palette, and that was because of two reasons. The first one was because my goal was to have a clean site. Since each page was going to have at least one picture that contained two to three different colors, the grayscale color palette would enhance the look of the picture while still maintain the simplicity of the page. Another reason was that this color palette didn’t look too different from brand’s current color palette, so the new design would fit in the brand’s color scheme.
                            </p>
                            <figure>
                                <img srcSet="images/the-ordinary/color-large.jpg  900w,
                                        images/the-ordinary/color-medium.jpg  600w,
                                        images/the-ordinary/color-small.jpg 350w"
                                    sizes="100vw"
                                    src="images/the-ordinary/color-small.jpg"
                                alt="Color Palette"/>
                                <figcaption>Color Palette</figcaption>
                            </figure>
                        </div>
    
                        <div>
                            <p>
                                The font that I chose for my final design is Roboto, and the reason for this was that Roboto looked similar to the font used on the brand’s logo, as well as it was also simple, unobtrusive, and easy on the eyes.
                            </p>
                            <figure>
                                <img srcSet="images/the-ordinary/typography-large.jpg  900w,
                                        images/the-ordinary/typography-medium.jpg  600w,
                                        images/the-ordinary/typography-small.jpg 350w"
                                    sizes="100vw"
                                    src="images/the-ordinary/typography-small.jpg"
                                alt="Typography"/>
                                <figcaption>Typography</figcaption>
                            </figure>
                        </div>
                    </div>
    
                    <div id="takeaways">
                        <h2><b id="takeaways-title">Takeaways</b></h2>
                        <p>
                            The most interesting thing that I’ve learned throughout the project is the importance of limitations when it comes to design. Growing up, I’d always believed that the best design came with no constraint and limitation. However, this project has taught me the opposite. I realize that a design is only best when it serves a purpose. As a result, when there is no constraint, a design could go wild, lose its purpose, and become meaningless. Throughout the project, not only did I learned to value limitations, but I also started to view limitations as opportunities to improve my design.
                        </p>
                    </div>
    
                    <div id="final-design">
                        <h2><b id="final-design-title">Final Design</b></h2>
                        <p>
                            Finally, we’ve made to the end of this lengthy case study. Thank you for taking your time to reading it through. Now, let’s enjoy the the final design, and I’ll see you in my other projects.
                        </p>
                        <figure>
                            <img srcSet="images/the-ordinary/home-page-large.jpg  900w,
                                    images/the-ordinary/home-page-medium.jpg  600w,
                                    images/the-ordinary/home-page-small.jpg 350w"
                                sizes="100vw"
                                src="images/the-ordinary/home-page-small.jpg"
                            alt="User Persona"/>
                            <figcaption>High Fidelity Homepage Prototype</figcaption>
                        </figure>
                        <figure>
                            <img srcSet="images/the-ordinary/catalog-page-large.jpg  900w,
                                    images/the-ordinary/catalog-page-medium.jpg  600w,
                                    images/the-ordinary/catalog-page-small.jpg 350w"
                                sizes="100vw"
                                src="images/the-ordinary/catalog-page-small.jpg"
                            alt="User Persona"/>
                            <figcaption>High Fidelity Catalog Page Prototype</figcaption>
                        </figure>
                        <figure>
                            <img srcSet="images/the-ordinary/product-page-large.jpg  900w,
                                    images/the-ordinary/product-page-medium.jpg  600w,
                                    images/the-ordinary/product-page-small.jpg 350w"
                                sizes="100vw"
                                src="images/the-ordinary/product-page-small.jpg"
                            alt="User Persona"/>
                            <figcaption>High Fidelity Product Page Prototype</figcaption>
                        </figure>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default TheOrdinary;