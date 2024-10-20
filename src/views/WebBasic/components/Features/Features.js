import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid, Typography } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader, CountUpNumber } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  placementGrid: {
    maxWidth: 375,
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
  },
  coverImage: {
    [theme.breakpoints.down('sm')]: {
      maxWidth: 500,
    },
  },
}));

const Features = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={6} data-aos="fade-up">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <SectionHeader
                title={
                  <span>
                    Mantenha o foco no seu crescimento e deixe a integração conosco.
                    <br />
                    <Typography
                      component="span"
                      variant="inherit"
                      color="primary"
                    >
                      Deixe que cuidamos da sua gestão multicanal.
                    </Typography>
                  </span>
                }
                subtitle="Você tem um negócio para gerenciar. Pare de se preocupar com integrações complicadas, múltiplos canais e processos manuais. Deixe que cuidamos disso para você."
                align="left"
                fadeUp
                disableGutter
              />
            </Grid>
            <Grid item xs={12}>
              <div className={classes.placementGrid}>
                <div>
                  <CountUpNumber
                    end={98}
                    label="Taxa de satisfação"
                    textColor="primary"
                    suffix="%"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={24}
                    label="Suporte dedicado"
                    textColor="primary"
                    suffix="/7"
                  />
                </div>
                <div>
                  <CountUpNumber
                    end={10}
                    label="De experiência no mercado"
                    textColor="primary"
                    suffix=" anos"
                    prefix='+'
                  />
                </div>
              </div>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          container
          justify="center"
          alignItems="center"
          xs={12}
          md={6}
          data-aos="fade-up"
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/dashboard-extended.svg"
            alt="..."
            className={classes.coverImage}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Features;
