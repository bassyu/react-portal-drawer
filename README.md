# react-portal-drawer

## Installation

```shell
$ npm i react-portal-drawer
$ yarn add react-portal-drawer
```

## Examples

### Minimal

```html
<body>
  <div id="root"></div>
</body>
```

```jsx
import React from "react";
import PortalDrawer from "react-portal-drawer";

const App = () => <PortalDrawer selectors="#root" />;
```

### General

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
</body>
```

```jsx
import React, { useState } from "react";
import PortalDrawer from "react-portal-drawer";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <button onClick={openModal}>open</button>
      {isModalOpen && (
        <PortalDrawer selectors="#modal-root" requestClose={closeModal}>
          <div>Any content</div>
          <button onClick={closeModal}>close</button>
        </PortalDrawer>
      )}
    </>
  );
};
```
