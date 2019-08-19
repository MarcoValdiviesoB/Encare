export const GRUPOS = {
  "Administrador" : [{
    title: 'Administrar usuarios',
    icon: 'person-outline',
    children : [
      {
        title: 'Crear usuario',
        link: '/pages/users/new'
      },
      {
        title: 'Modificar usuarios',
        link: '/pages/users/modify'
      },
    ]
  }],
  "Ops" : [{
    title: 'Formularios',
    icon: 'file-outline',
    children : [
      {
        title: 'Crear formulario',
        link: '#'
      },
      {
        title: 'Modificar formulario',
        link: '#'
      },
    ]},
    {
      title : "Informes",
      link : "#",
      icon : "file-outline"
    },
    {
      title: 'Inspectores y supervisores',
      link : "#",
      icon : "person-outline"
    }
  ],
  "Inspector" : [{
    title: 'Formularios',
    icon: 'file-outline',
    link: '#'
    }
  ],
  "Supervisor" : [{
    title: 'Formularios',
    icon: 'file-outline',
    link: '#'
  },
  {
    title: 'Inspectores',
    icon: 'person-outline',
    link: '#'
    }
  ],
  "Cliente" : [{
    title: 'Informes',
    icon: 'file-outline',
    link: '#'
  },
  {
    title: 'Visitas',
    icon: 'pin-outline',
    link: '#'
    }
  ],
  "Coordinador" : [{
    title: 'Inspectores y supervisores',
    icon: 'person-outline',
    link: '#'
  },
  {
    title: 'Visitas',
    icon: 'pin-outline',
    link: '#'
    }
  ],
}
