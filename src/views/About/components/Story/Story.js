import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(() => ({
  image: {
    maxWidth: 420,
  },
}));

const Twopara = () => {
  return (
    <div>
      <p>
        Na EasyToGo, nosso objetivo é desenvolver sistemas de alta qualidade que
        elevam a experiência do usuário. Aplicamos as mais recentes inovações em
        tecnologia para entregar soluções eficientes, intuitivas e personalizadas
        para cada projeto.
      </p>
      <br></br>
      <p>
        Contamos com uma equipe dedicada, focada em oferecer soluções que otimizam
        processos e facilitam a interação com plataformas digitais. Seja qual for
        sua necessidade, nós estamos prontos para transformar suas ideias em
        realidade, com sistemas robustos e de alta performance.
      </p>
    </div>
  );
};

const Story = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid
        container
        justify="space-between"
        spacing={isMd ? 4 : 2}
        direction={isMd ? 'row' : 'column-reverse'}
      >
        <Grid
          item
          container
          alignItems="center"
          justify="flex-start"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <div>
            <SectionHeader
              title="Nosso Propósito"
              subtitle={<Twopara />}
              align="left"
              disableGutter
              subtitleProps={{
                color: 'textPrimary',
                variant: 'body1',
              }}
            />
          </div>
        </Grid>
        <Grid
          item
          container
          justify={isMd ? 'flex-end' : 'flex-start'}
          alignItems="center"
          xs={12}
          md={6}
          data-aos={'fade-up'}
        >
          <Image
            src="https://assets.maccarianagency.com/the-front/illustrations/working-on-sofa.svg"
            alt="Nossa história"
            className={classes.image}
          />
        </Grid>
      </Grid>
    </div>
  );
};

Story.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default Story;
