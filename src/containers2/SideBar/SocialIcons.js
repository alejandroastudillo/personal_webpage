import React from 'react';
import { Container, Button, Icon, Grid } from 'semantic-ui-react';

const SocialIcons = () => {
    return (
        <Container>
            <div className="social-buttons">
                {/* <Button circular icon='facebook f' />
                    <Button circular icon='linkedin' />
                <Button circular icon='mail' /> */}
                {/* <a href="#" className="ai ai-google-scholar ai-2x"></a> */}
                
                {/* <Button circular icon>
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
                <Icon name='linkedin in' link size='big'/> */}
                {/* <a href="#" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i></a>
                <a href="https://www.github.com/alejandroastudillo" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a> */}

                <Grid columns={7} >
                    <Grid.Column></Grid.Column>
                    <Grid.Column>
                        <a href="https://www.github.com/alejandroastudillo" target="_blank" rel="noopener noreferrer"><i className="fa fa-github fa-2x"></i></a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://scholar.google.com/citations?user=9ONkJZAAAAAJ" target="_blank" rel="noopener noreferrer"><i className="ai ai-google-scholar ai-2x"></i></a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://www.researchgate.net/profile/Alejandro_Astudillo_Vigoya" target="_blank" rel="noopener noreferrer"><i className="ai ai-researchgate ai-2x"></i></a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href="https://www.linkedin.com/in/alejandro-astudillo-vigoya/" target="_blank" rel="noopener noreferrer"><i className="fa fa-linkedin fa-2x"></i></a>
                    </Grid.Column>
                    <Grid.Column>
                        <a href="mailto:alejoastv@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa fa-envelope fa-2x"></i></a>
                    </Grid.Column>
                    <Grid.Column></Grid.Column>
                </Grid>

            </div>
        </Container>
    )
}
export default SocialIcons