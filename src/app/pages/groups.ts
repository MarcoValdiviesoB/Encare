export const GRUPOS = {
  "Administrador" : [{
    title: 'Administrar usuarios',
    icon: 'person-outline',
    children : [
      {
        title: 'Crear usuario',
        link: '/auth/register'
      },
      {
        title: 'Modificar usuarios',
        link: 'users'
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
    title: 'Visitas',
    icon: 'pin-outline',
    link: 'visitas/inspecciones'
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
    link: 'visitas/solicitud',
    }
  ],
  "Coordinador" : [{
    title: 'Inspectores y supervisores',
    icon: 'person-outline',
    link: '/pages/users'
  },
  {
    title: 'Visitas',
    icon: 'pin-outline',
    link: 'visitas/solicitudes'
    }
  ],
}
