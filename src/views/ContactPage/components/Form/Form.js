import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Grid,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: '40px',
  },
  form: {
    maxWidth: 550,
    margin: `0 auto`,
    '& .MuiTextField-root': {
      background: theme.palette.background.paper,
    },
    '& .MuiOutlinedInput-input': {
      background: theme.palette.background.paper,
    },
  },
  inputTitle: {
    fontWeight: 700,
    marginBottom: theme.spacing(1),
  },
}));

const Form = props => {
  const { className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  return (
    <div className={classes.root} {...rest}>
      <SectionHeader
        title="Não encontrou a resposta que precisa?"
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        data-aos="fade-up"
        align={isMd ? 'center' : 'left'}
      />
      <form
        className={classes.form}
        method="POST"
        action="https://getform.io/f/96471a44-a0a9-4189-819f-f790c5b594ab"
      >
        <Grid container spacing={1}>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Nome completo
            </Typography>
            <TextField
              placeholder="Seu nome completo"
              variant="outlined"
              size="medium"
              name="name"
              fullWidth
              type="text"
              value={nome}
              onChange={e => setNome(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              E-mail
            </Typography>
            <TextField
              placeholder="Seu endereço de e-mail"
              variant="outlined"
              size="medium"
              name="email"
              fullWidth
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} data-aos="fade-up">
            <Typography
              variant="subtitle1"
              color="textPrimary"
              className={classes.inputTitle}
            >
              Mensagem
            </Typography>
            <TextField
              placeholder="Sua pergunta sobre nossos serviços"
              variant="outlined"
              name="message"
              fullWidth
              multiline
              value={mensagem}
              rows={2}
              onChange={e => setMensagem(e.target.value)}
            />
          </Grid>
          <Grid item container justify="center" xs={12}>
            <Button
              variant="contained"
              type="submit"
              color="primary"
              size="large"
            >
              Enviar
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

Form.propTypes = {
  className: PropTypes.string,
};

export default Form;
