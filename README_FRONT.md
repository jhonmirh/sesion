1.	La protección de rutas está dividida en dos partes reflejada en dos componentes los cuales protegen la ruta donde debe tener acceso únicamente los clientes y la otra que le da acceso únicamente a los administradores , tamben se desarrollo una protección cuando el usuario tiene sesión iniciada e intenta acceder a login ó register, pero el Administrador tiene acceso a register, inclusive se añadió a el sidebar de Administrador.

Tan solo aprovechando características de nextjs, se colocan encerrando el componente renderizado en las rutas
<ProtectedClient>      </ProtectedClient> 
<ProtectedAdmin>    </ProtectedAdmin>
<ProtectedSesionIniciada>    </ProtectedSesionIniciada>

Para garantizar que toquen de inicio de sesión del cliente o el administrador se realizó a través de promesas, por eso van a ver un aviso de Espera… Estamos cargando.


2.	El contador de visita fue realizado no solo para llevar el conteo cuando se hace la visita al portal sino que también va a permitir llevar un control de la IP del usuario que visita lo cual garantiza que el contador no se va a incrementar cuando el usuario accede n veces desde la misma dirección IP para esto se va a utilizar una api externa por eso es que si no tienen internet no van a ver que se incremente el contador 

El control de visita de la misma IP está programado para 24 horas lo que trae una versión verdadera de la visita que se realizan a una aplicación

Para esto se desarrolló el back y el Front para dar un aspecto profesional a la aplicación que estamos desarrollando.

3.	Para el libro de testimonio el compañero Marco, desarrolló todo lo pertinente a back, adicionalmente se le agregó el campo rating, y se cambió los status a español.

El testimonio tiene acceso el usuario cliente desde el menú de él donde aparece tu testimonio, automáticamente le carga el correo y el nombre del usuario activo que tenga sesión iniciada esperando el mensaje y la calificación haciendo clic en cinco estrellas en donde es obligatorio hacerlo donde el mes todos los campos son obligatorios donde alguno hace falta, el botón de enviar testimonio va a permanecer inhabilitado y se habilitará cuando todos los campos estén completos todos los campos en el formulario son validados el mensaje está limitado a 50 caracteres para poder presentar a través del carrusel, cuando se envía automáticamente va a quedar con estatus Pendiente, y le va a llegar un correo electrónico al cliente informando que en un transcurso de 24 horas su testimonio va a ser publicado 

De este también se realizó el panel del administrador donde va a haber todos los testimonios de los diferentes estados ordenados de pendiente a publicado el administrador va a poder eliminar testimonios, así como hace clic en revisar realizar lectura completa del mensaje y cambiar su estado de pendiente a publicado o de publicado a pendiente automáticamente al tener estado de Publicado, el testimonio va a aparecer en el carrusel que se encuentra en el Home en la parte inferior arriba del Footer.

4.	El dashboard de administrador, eso menú dinámico que se va a ubicar automáticamente cuando un administrador inicia sesión y va a aparecer arriba y a la izquierda debajo del header, y el mismo va a permanecer activo durante toda la sesión del usuario administrador esto fue realizado debido a que hay rutas y componentes múltiples que se encuentran en la aplicación y tiene acceso tanto el cliente como el administrador y para no caer en el duplicado de componentes, se colocó este menú sidebar rodeado de un ShowComponent en el layout, principal de la app

