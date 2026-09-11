import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);

    const title = searchParams.get('title') || 'Nakul Properties Faridabad';
    const location = searchParams.get('location') || 'Premium Real Estate';
    const price = searchParams.get('price') || '';

    return new ImageResponse(
      (
        <div
          style={{
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            backgroundColor: '#0a0a0a',
            padding: '80px',
          }}
        >
          {/* Accent bar */}
          <div style={{ width: '120px', height: '12px', backgroundColor: '#D4AF37', marginBottom: '40px' }} />
          
          <div style={{
            display: 'flex',
            fontSize: '36px',
            color: '#D4AF37',
            marginBottom: '20px',
            textTransform: 'uppercase',
            letterSpacing: '4px',
            fontWeight: 600,
          }}>
            NAKUL PROPERTIES
          </div>

          <div
            style={{
              fontSize: '80px',
              fontWeight: 800,
              color: 'white',
              lineHeight: 1.1,
              marginBottom: '40px',
              maxWidth: '950px',
            }}
          >
            {title.replace(/\| Nakul Properties/i, '').trim()}
          </div>

          <div
            style={{
              display: 'flex',
              fontSize: '48px',
              color: '#d4d4d4',
              fontWeight: 500,
            }}
          >
            {location} {price ? ` • ${price}` : ''}
          </div>
        </div>
      ),
      {
        width: 1200,
        height: 630,
      }
    );
  } catch (e) {
    console.error('OG Image Generation Error:', e);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
