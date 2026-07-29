import type { APIRoute } from 'astro';
import { Resend } from 'resend';

export const prerender = false;

// Inicializar cliente de Resend con la variable de entorno
const resend = new Resend(process.env.RESEND_API_KEY || import.meta.env.RESEND_API_KEY);

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    
    // Validar datos básicos
    if (!data.name || !data.email || !data.message) {
      return new Response(
        JSON.stringify({ error: 'Faltan campos requeridos.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Enviar el email vía Resend
    // Nota: from debe ser un email de tu dominio verificado en Resend
    // Por lo general algo como info@tudominio.com, pero lo mandamos A tu email principal.
    const { data: responseData, error } = await resend.emails.send({
      from: 'Portfolio <hola@alexmatos.dev>', 
      to: ['hola@alexmatos.dev'],
      subject: `Nuevo mensaje de portfolio de: ${data.name}`,
      html: `
        <h2>Nuevo mensaje recibido</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <hr />
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    if (error) {
      console.error('Error de Resend:', error);
      return new Response(
        JSON.stringify({ error: 'Error al enviar el email.' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ message: 'Email enviado correctamente', data: responseData }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
    
  } catch (err) {
    console.error('Error procesando request:', err);
    return new Response(
      JSON.stringify({ error: 'Fallo interno del servidor.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};
