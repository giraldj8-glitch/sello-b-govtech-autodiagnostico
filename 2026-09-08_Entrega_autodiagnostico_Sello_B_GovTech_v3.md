# Entrega v3 — Autodiagnóstico del Sello B-GovTech

Fecha: 8 de septiembre de 2026  
Servicio: S1 — Sello B-GovTech  
Artefacto principal: `2026-09-08_Autodiagnostico_Sello_B_GovTech_Experiencia_visual_v3.html`

## Resultado

Se creó una versión nueva del prototipo, sin modificar ni eliminar la v2. La v3 corrige dos asuntos:

1. El recorrido ahora hace visibles 18 bloques que cubren todos los temas de las filas E5–E22 de la matriz. Cuando una fila mezcla asuntos distintos, el bloque los presenta como respuestas separadas.
2. La narrativa y el movimiento se centran en el camino al Sello B-GovTech. Se retiró la apertura genérica «Explora tu potencial GovTech» y se reemplazó por una experiencia de preparación para el sello.

## Correspondencia con la matriz

| Fila de la matriz | Bloque del prototipo | Tratamiento |
| --- | --- | --- |
| E5–E6 | B01 | Organización, rol responsable y perfil institucional opcional. No se exige LinkedIn personal. |
| E7 | B02 | Naturaleza de la organización, incluida academia y equipos no constituidos con alcance pendiente. |
| E8 | B16 y B17 | Categoría de valor público, situación pública, beneficiarios y barreras de acceso. |
| E9 | B05 | Quién responde por adaptar o corregir la solución. |
| E10 | B06 | Conducta de aprendizaje con posibles usuarios, sin exigir I+D formal. |
| E11 | B12 | Planificación de recursos y condiciones de pago, sin usar 90–120 días como filtro universal. |
| E12 | B13 | Soporte proporcional al uso; 24/7 no se premia por sí solo. |
| E13 | B14 | Experiencia preparando ofertas para el sector público, sin convertir experiencia previa en requisito. |
| E14 | Cierre de revisión | Confirmación de que las respuestas reflejan lo conocido hoy; no equivale a verificación. |
| E15 | B15 | Disponibilidad posterior de un soporte de existencia y representación; no se carga en el diagnóstico. |
| E16 | B03 | Nombre, función tecnológica y tipo de evidencia que podría mostrarse después. |
| E17 | B07 | Derechos, licencias y autorizaciones para ofrecer y mantener la solución. |
| E18 | B04 | Etapa de desarrollo en lenguaje común; no asigna automáticamente un TRL. |
| E19 | B08 | Capacidad de integración mediante interfaces documentables; no exige una plataforma distrital específica. |
| E20 | B09 | Portabilidad, exportación y estándares, evitando premiar siglas. |
| E21 | B10 | Datos personales y decisiones automáticas como dos respuestas distintas. |
| E22 | B11 | Contextos de conectividad e infraestructura, sin exigir operación sin internet en todos los casos. |

Los bloques B17 y B18 profundizan la conexión entre situación pública, personas, cambio esperado y evidencia. Esa ampliación procede de la investigación de referentes y del lenguaje de diseño de iBO; no estaba suficientemente desarrollada en las preguntas originales.

## Movimiento y experiencia

La entrada toma como referente conductual la lógica de cuestionario inmersivo de [Creative Types by Adobe](https://mycreativetype.com/), pero conserva la identidad visual de Bogotá Capital GovTech aportada por el equipo.

- El sello se construye visualmente mediante anillos, cuatro facetas y un núcleo central.
- El titular entra por líneas con revelado escalonado.
- El sello responde con una inclinación suave al puntero mediante un resorte sin dependencias externas.
- Al iniciar, la bienvenida se recoge con una transición narrativa y da paso al formulario.
- Los cambios de pregunta indican dirección, fase y avance sin bloquear la interacción.
- Las opciones muestran respuesta inmediata al seleccionar y al presionar.
- El resultado ensambla una marca de «mapa de preparación listo», evitando representar un sello otorgado.
- Con teclado se omiten las animaciones de navegación. Con `prefers-reduced-motion` se eliminan desplazamientos, giros y bucles, conservando la comprensión.

## Hallazgos incorporados

- **Hallazgo:** La v2 resumía el diagnóstico en 15 preguntas principales y preguntas condicionales. Aunque cubría varios temas, la interfaz no permitía reconocer con claridad las 18 filas de la matriz.
- **Insight:** Mostrar la correspondencia «bloque de experiencia ↔ fila de matriz» aumenta trazabilidad sin exponer el lenguaje técnico como requisito para la persona usuaria.
- **Recomendación implementada:** usar 18 bloques visibles y agrupar solo respuestas que comparten un mismo tema.
- **Decisión de diseño:** la bienvenida comunica «camino al sello» y el cierre «orientación para verificación»; no usa una metáfora de exploración general.

## Verificación realizada

La validación automatizada terminó en estado `PASS` y comprobó:

- renderizado de los 18 bloques y sus campos;
- presencia de las referencias de matriz;
- validación de respuestas obligatorias;
- revisión con 18 accesos para editar;
- confirmación final y resultado centrado en S1;
- ausencia de desbordamiento horizontal en escritorio y móvil;
- funcionamiento con movimiento reducido;
- navegación por teclado sin animación;
- ausencia de errores de JavaScript durante el recorrido probado.

## Límites y decisiones pendientes

- Es un prototipo local: no envía ni persiste respuestas.
- No calcula un puntaje oficial, no asigna un nivel y no entrega el sello.
- La certificación, la elegibilidad de academia u otros actores y las evidencias requeridas siguen siendo decisiones del equipo responsable.
- Poppins es una aproximación provisional a la tipografía observada en las referencias; no se ha confirmado como fuente institucional.
- El nombre de Bogotá Capital GovTech está compuesto como texto; no se incorporó un archivo de logotipo oficial.

## Archivos conservados

- `2026-09-07_Autodiagnostico_S1_Experiencia_visual_v2.html` permanece intacto.
- `2026-09-07_Prototipo_autodiagnostico_S1.html` permanece intacto.
- La nueva entrega está separada como v3 para facilitar comparación y revisión.
