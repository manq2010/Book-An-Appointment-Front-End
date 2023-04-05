import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
  Card,
  CardActions,
  CardContent,
  Container,
  Divider,
  Typography,
} from '@mui/material';
import SignUpForm from '../features/Sessions/Signup/SignUpForm';

function SignUpPage() {
  return (
    <section style={{ marginTop: '2em' }}>
      <Container maxWidth="md">
        <Card sx={{ boxShadow: 1, maxWidth: 'md' }}>
          <CardContent>
            <Container maxWidth="sm">
              <Typography variant="h2" color="text.primary" gutterBottom>
                Sign Up
              </Typography>
              <SignUpForm />
            </Container>
          </CardContent>
          <Divider light={false} />
          <CardActions
            sx={{ marginTop: '1em', justifyContent: 'center' }}
            disableSpacing
          >
            <Box>
              Already have an account?
              {' '}
              <Link to="/login">Login!</Link>
            </Box>
          </CardActions>
        </Card>
      </Container>
    </section>
  );
}
export default SignUpPage;
