import React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import { useMediaQuery, Grid } from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const WhoWeAre = props => {
  const { className, ...rest } = props;

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Quem somos?"
            subtitle="Somos uma equipe especializada em desenvolver sistemas de alta qualidade, com foco em proporcionar a melhor experiência ao usuário. Nosso time é composto por desenvolvedores experientes e criativos, prontos para criar soluções personalizadas e eficientes para atender às necessidades de nossos clientes."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
        <Grid item xs={12} sm={6} data-aos="fade-up">
          <SectionHeader
            title="Como podemos te ajudar?"
            subtitle="A EasyToGo está preparada para transformar suas ideias em sistemas robustos, eficientes e com alto desempenho. Nossos serviços cobrem todas as etapas do desenvolvimento de software, desde o planejamento até a execução final, com o objetivo de proporcionar a melhor experiência possível ao usuário."
            disableGutter
            align="left"
            subtitleProps={{
              variant: 'body1',
              color: 'textPrimary',
            }}
          />
        </Grid>
      </Grid>
    </div>
  );
};

WhoWeAre.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
};

export default WhoWeAre;
