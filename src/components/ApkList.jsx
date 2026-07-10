import React, { useState, useEffect } from 'react';

const APK_SERVER_URL = 'https://Dark-Lord77-homelab.hf.space/files';

const ApkList = () => {
  const [apks, setApks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApks = async () => {
      try {
        const response = await fetch(APK_SERVER_URL);
        if (!response.ok) throw new Error('Failed to fetch APK list');
        
        const data = await response.json();
        
        // news on top 
        const sorted = data.sort((a, b) => b.modified - a.modified);
        setApks(sorted);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchApks();
  }, []);

  if (loading) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
        Loading APK list 
      </div>
    );
  }

  if (error) {
    return (
      <div style={{
        background: 'rgba(231, 76, 60, 0.1)',
        border: '1px solid #e74c3c',
        borderRadius: '8px',
        padding: '20px',
        textAlign: 'center'
      }}>
        <p style={{ color: '#e74c3c' }}>Failed to load APK list</p>
        <p style={{ color: '#888', fontSize: '12px' }}>{error}</p>
        <p style={{ color: '#888', fontSize: '12px', marginTop: '8px' }}>
          Server: {APK_SERVER_URL}
        </p>
      </div>
    );
  }

  if (apks.length === 0) {
    return (
      <div style={{ textAlign: 'center', padding: '20px', color: '#888' }}>
        No APK files available 
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', margin: '20px 0' }}>
      {apks.map((apk, index) => {
        const sizeMB = (apk.size / 1024 / 1024).toFixed(2);
        const date = new Date(apk.modified * 1000).toLocaleString('ru-RU', {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        });
        const isLatest = index === 0;

        return (
          <div
            key={apk.name}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: isLatest ? 'rgba(155, 89, 182, 0.15)' : 'rgba(155, 89, 182, 0.05)',
              border: isLatest ? '1px solid rgba(155, 89, 182, 0.4)' : '1px solid rgba(155, 89, 182, 0.15)',
              borderRadius: '8px',
              padding: '16px 20px',
              flexWrap: 'wrap',
              gap: '12px',
              transition: 'all 0.3s ease'
            }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', flex: '1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
                {isLatest && (
                  <span style={{
                    background: '#9b59b6',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: '700',
                    padding: '2px 12px',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.5px'
                  }}>
                    Latest
                  </span>
                )}
                <span style={{ color: '#fff', fontWeight: '500' }}>
                  {apk.name}
                </span>
              </div>
              <span style={{ color: '#888', fontSize: '13px' }}>
                📦 {sizeMB} MB • 📅 {date}
              </span>
            </div>
            <a
              href={`https://YOUR_SPACE_URL/download/${apk.name}`}
              style={{
                background: '#9b59b6',
                color: '#fff',
                padding: '8px 20px',
                borderRadius: '6px',
                textDecoration: 'none',
                fontSize: '14px',
                fontWeight: '500',
                transition: 'all 0.3s ease',
                whiteSpace: 'nowrap'
              }}
              onMouseEnter={(e) => {
                e.target.style.background = '#8e44ad';
                e.target.style.transform = 'scale(1.02)';
              }}
              onMouseLeave={(e) => {
                e.target.style.background = '#9b59b6';
                e.target.style.transform = 'scale(1)';
              }}
              download
            >
              ⬇️ Скачать
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default ApkList;
