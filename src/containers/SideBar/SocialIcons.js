import React from 'react';
import { Container, Button, Icon } from 'semantic-ui-react';

const SocialIcons = () => {
    return (
        <Container>
            <div className="social-buttons">
                {/* <Button circular icon='facebook f' />
                    <Button circular icon='linkedin' />
                <Button circular icon='mail' /> */}
                {/* <a href="#" className="ai ai-google-scholar ai-2x"></a> */}
                <Button circular icon>
                    <i className="ai ai-google-scholar ai-2x"></i>
                </Button>
                <Button circular icon>
                    <i className="ai ai-researchgate ai-2x"></i>
                </Button>
                <Button circular icon>
                    <i className="fa fa-github fa-2x"></i>
                </Button>
                <Button circular icon>
                    <i className="fa fa-linkedin fa-2x"></i>
                </Button>
                <Button circular icon>
                    <i className="fa fa-envelope fa-2x"></i>
                </Button>

                <Icon name='linkedin in' link size='big'/>
                <Icon name='linkedin in' link size='big'/>
                <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i></a>
                <a href="https://www.github.com/alejandroastudillo" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>
            </div>
        </Container>
    )
}

export default SocialIcons