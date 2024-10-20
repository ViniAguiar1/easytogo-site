import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Button, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  image: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Hero = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  let history = useHistory();

  function handleClick() {
    history.push('/contact-page');
  }

  return (
    <div className={className} {...rest}>
      <Grid container justify="space-between" spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos={'fade-up'}>
          <SectionHeader
            title={
              <span>
                Bem vindo à{' '}
                <Typography component="span" variant="inherit" color="primary">
                  Easytogo.
                </Typography>
                <br />
                {/* <span>A marketplace for all your SOX testing.</span> */}
              </span>
            }
            subtitle="Potencialize seus resultados diários com o suporte da EasyToGo, oferecendo soluções completas e acessíveis em marketing e tecnologia para empresas de todos os portes."
            ctaGroup={[
              <Button
                variant="contained"
                color="secondary"
                size="large"
                // onClick={handleClick}
              >
                <a href="#">
                Saiba Mais Agora!
                </a>
              </Button>,

              // <Button variant="outlined" color="primary" size="large">
              //   <a href="https://calendly.com/sas70/testing-30-min">
              //     Book a meeting
              //   </a>
              // </Button>,

              <Button variant="outlined" color="primary" size="large">
                <a href="https://br.linkedin.com/company/easytogo">
                  Fique por Dentro
                </a>
              </Button>,

              <Button variant="outlined" color="primary" size="large">
                <a href="https://w.app/easytogo">
                Solicite uma Proposta
                </a>
              </Button>,
            ]}
            align={isMd ? 'left' : 'center'}
            disableGutter
            titleVariant="h3"
          />
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/mind-map.svg"
            alt="Mind-map"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Hero.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Hero;
