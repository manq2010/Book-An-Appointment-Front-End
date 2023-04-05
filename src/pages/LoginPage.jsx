import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Card, CardActions, CardContent, Container, Divider, Typography,
} from '@mui/material';
import LoginForm from '../features/Login/LoginForm';

function LoginPage() {
  return (
    <section style={{ marginTop: '2em' }}>
      <Container maxWidth="md">
        <Card sx={{ boxShadow: 1, maxWidth: 'md' }}>
          <CardContent>
            <Container maxWidth="sm">
              <Typography variant="h2" color="text.primary" gutterBottom>
                Login
              </Typography>
              <LoginForm />
            </Container>
          </CardContent>
          <Divider light={false} />
          <CardActions sx={{ marginTop: '1em', justifyContent: 'center' }} disableSpacing>
            <Box>
              <Typography variant="body2" color="text.secondary" align="center">
                <Link to="/forgot-password">Forgot Password?</Link>
              </Typography>
              <Link to="/signup">Create an Account!</Link>
            </Box>
          </CardActions>
        </Card>
      </Container>

    </section>
  );
}
export default LoginPage;
