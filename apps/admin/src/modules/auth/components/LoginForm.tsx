'use client';

import { Lock, User } from 'lucide-react';

import { Button } from '@repo/ui/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/ui/card';
import { Input } from '@repo/ui/components/ui/input';
import { Label } from '@repo/ui/components/ui/label';

import { useLoginForm } from '../hooks/use-login-form';

export function LoginForm(): React.JSX.Element {
  const {
    usernameField,
    passwordField,
    onSubmit,
    errors,
    isSubmitting,
  } = useLoginForm();

  return (
    <Card className="w-full border-0 py-0 shadow-lg sm:shadow-xl">
      <CardHeader className="space-y-1 px-5 pt-6 pb-4 text-center sm:px-8 sm:pt-8">
        <CardTitle className="text-xl font-bold sm:text-2xl">
          Inicia sesión en tu cuenta
        </CardTitle>
        <CardDescription className="text-sm text-neutral/65 sm:text-base">
          Introduce tus credenciales para acceder al dashboard administrativo.
        </CardDescription>
      </CardHeader>

      <CardContent className="px-5 pb-6 sm:px-8 sm:pb-8">
        <form onSubmit={onSubmit} className="space-y-5">
          <div className="space-y-2">
            <Label htmlFor="username" className="text-sm font-semibold">
              Usuario
            </Label>
            <div className="relative">
              <User
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="username"
                autoComplete="username"
                placeholder="@tu.usuario"
                className="h-11 pl-10"
                {...usernameField}
                aria-invalid={errors.username ? true : undefined}
              />
            </div>
            {errors.username && (
              <p className="text-sm text-destructive">{errors.username.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-semibold">
              Contraseña
            </Label>
            <div className="relative">
              <Lock
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                placeholder="••••••••"
                className="h-11 pl-10"
                {...passwordField}
                aria-invalid={errors.password ? true : undefined}
              />
            </div>
            {errors.password && (
              <p className="text-sm text-destructive">{errors.password.message}</p>
            )}
          </div>

          {errors.root && (
            <p className="text-sm text-destructive">{errors.root.message}</p>
          )}

          <Button
            type="submit"
            className="h-11 w-full bg-primary text-base font-semibold hover:bg-primary/90"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Iniciando sesión...' : 'Iniciar sesión'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
