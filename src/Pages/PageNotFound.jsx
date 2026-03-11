import React from 'react'
import "../styles/PageNotFound.css"

const PageNotFound = () => {
    return (
        <div>
            <section class="page_404">
                <div class="four_zero_four_bg">
                    <h1 class="heading">404</h1>
                </div>
                <div class="content_box_404">
                    <h3>Look like you're lost</h3>
                    <p>the page you are looking for is not avaible!</p>
                    <a href="/" class="link_404">Go to Home</a>
                </div>
            </section>
        </div>
    )
}

export default PageNotFound
