import React, { Component } from 'react'
import { SocialIcon } from 'react-social-icons'

export class Footer extends Component {
    render() {
        return (
            <div className="container my-5">
                <footer className="text-center text-lg-start" style={{ backgroundColor: "lightblue", borderRadius:'60px'}}>
                    <div className="container d-flex justify-content-center py-5">
                    <SocialIcon network="github" url="www.vimeo.com" style={{padding:'5px',marginRight:'15px'}} />
                    <SocialIcon network="facebook" url="www.vimeo.com" style={{padding:'5px',marginRight:'15px'}} />
                    <SocialIcon network="youtube" url="www.vimeo.com" style={{padding:'5px',marginRight:'15px'}}/>
                    <SocialIcon network="instagram" url="www.vimeo.com" style={{padding:'5px',marginRight:'15px'}}/>
                    <SocialIcon network="linkedin" url="www.vimeo.com" style={{padding:'5px',marginRight:'15px'}}/>
                    </div>
                    <div className="text-center text-white p-3" style={{ backgroundColor: "red" }}>
                        © 2023 Copyright:
                    </div>
                </footer>
            </div>
        )
    }
}

export default Footer
