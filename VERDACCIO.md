# Configuración de Verdaccio para Desarrollo Local

## Inicio Rápido

### 1. Instalar Dependencias
```bash
npm install
```

### 2. Iniciar Verdaccio
En una terminal separada:
```bash
npm run registry:start
```

Verdaccio estará disponible en: http://localhost:4873/

### 3. Publicar Paquetes Localmente
```bash
npm run publish:local
```

Este comando:
- Buildea todos los paquetes (shared-ui, shared-ui-angular, shared-ui-react, shared-ui-vue)
- Publica todos los paquetes a Verdaccio local

### 4. Usar Paquetes en Otro Proyecto

#### Opción A: Configurar registro temporalmente
```bash
npm set registry http://localhost:4873/
npm install @stencil-nx-project/shared-ui-angular
npm set registry https://registry.npmjs.org/  # Restaurar
```

#### Opción B: Usar flag en install
```bash
npm install @stencil-nx-project/shared-ui-angular --registry http://localhost:4873/
```

#### Opción C: Crear .npmrc en el proyecto
```
registry=http://localhost:4873/
```

## Scripts Disponibles

- `npm run registry:start` - Inicia servidor Verdaccio
- `npm run registry:set` - Configura npm para usar Verdaccio
- `npm run registry:reset` - Restaura npm al registro público
- `npm run publish:local` - Buildea y publica todos los paquetes

## Gestión de Usuarios

Primera vez que publiques, necesitas crear un usuario:
```bash
npm adduser --registry http://localhost:4873/
```

Usa cualquier username/password/email (solo local).

## Ver Paquetes Publicados

Interfaz web: http://localhost:4873/

## Limpiar Storage

Si necesitas borrar todos los paquetes publicados:
```bash
rm -rf verdaccio-storage
```

Luego reinicia Verdaccio.

## Notas

- Verdaccio corre en puerto 4873 por defecto
- Storage local en `./verdaccio-storage/` (ignorado por git)
- Configuración en `verdaccio.yaml`
- Paquetes bajo scope `@stencil-nx-project/*` tienen permisos especiales

```bash
npm run registry:start &
npm run publish:local
```