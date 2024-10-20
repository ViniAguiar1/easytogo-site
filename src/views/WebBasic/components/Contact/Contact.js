import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  ListItem,
  ListItemAvatar,
  Typography,
  colors,
} from '@material-ui/core';
import { SectionHeader, IconAlternate, TypedText } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  typed: {
    fontWeight: 'bold',
  },
  listItemAvatar: {
    minWidth: 28,
  },
  formCover: {
    objectFit: 'cover',
    borderBottomLeftRadius: '40%',
  },
  cardProduct: {
    [theme.breakpoints.up('md')]: {
      maxWidth: 400,
    },
  },
}));

const Contact = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container spacing={4}>
        <Grid
          item
          container
          alignItems="center"
          justify="flex-end"
          xs={12}
          data-aos="fade-up"
        >
          <Grid item>
            <SectionHeader
              label="Tecnologia e Marketing Avançados"
              title={
                <>
                  <span>
                    A plataforma que transforma
                    <br />
                    <Typography
                      color="secondary"
                      variant="inherit"
                      component="span"
                    >
                      seus resultados em&nbsp;
                    </Typography>
                    <TypedText
                      component="span"
                      variant="h4"
                      color="secondary"
                      className={classes.typed}
                      typedProps={{
                        strings: [
                          'crescimento exponencial.',
                          'soluções personalizadas.',
                          'sucesso garantido.',
                        ],
                        typeSpeed: 80,
                        loop: true,
                      }}
                    />
                  </span>
                </>
              }
              subtitle="Com a EasyToGo, você maximiza suas vendas e automatiza processos, contando com uma equipe de especialistas e tecnologias de ponta."
              align="left"
              disableGutter
            />
            <Grid container spacing={0}>
              {data.map((item, index) => (
                <Grid item xs={6} key={index} data-aos="fade-up">
                  <ListItem disableGutters>
                    <ListItemAvatar className={classes.listItemAvatar}>
                      <IconAlternate
                        size="extraSmall"
                        shape="circle"
                        fontIconClass="fas fa-check"
                        color={colors.deepOrange}
                      />
                    </ListItemAvatar>
                    <Typography variant="subtitle1" color="secondary" noWrap>
                      {item}
                    </Typography>
                  </ListItem>
                </Grid>
              ))}
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </div>
  );
};

Contact.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to render
   */
  data: PropTypes.array.isRequired,
};

export default Contact;
