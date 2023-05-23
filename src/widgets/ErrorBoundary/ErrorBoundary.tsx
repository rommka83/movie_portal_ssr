import styles from './errorboundary.module.css';
import React, { Component, ErrorInfo, ReactNode } from 'react';
import { t } from 'i18next';
import Logo from 'shared/ui/Logo';
import ButtonOrLink from 'shared/ui/ButtonOrLink';

interface IErrorBoundaryProps {
  children?: ReactNode;
}

interface IErrorBoundaryState {
  hasError: boolean;
}

export class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  public state: IErrorBoundaryState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): IErrorBoundaryState {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className={styles.container}>
          <div className={styles.innerContainer}>
            <h2 className={styles.title}>{t('ErrorBoundary.title')}</h2>
            <ButtonOrLink
              to='/'
              variant='secondary'
              transparent
              className={styles.button}
              onClick={() => this.setState({ hasError: false })}
            >
              <span>{t('ErrorBoundary.buttonText')}</span> <Logo className={styles.logoImg} />
            </ButtonOrLink>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
