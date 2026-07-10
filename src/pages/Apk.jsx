import React, {useState, useEffect } from 'react';
import MarkdownPage from '../components/MarkdownPage.jsx';
import apkContent from '../content/apk.md?raw';
import ApkList from '../components/ApkList.jsx';

function Apk() {
  const contentWithComponent = apkContent.replace(
    '<div id="apk-list-container">\n  <p>Loading Apk list...</p>\n</div>',
        '<div id="apk-list-container"></div>'
  );
  return ( <div> 
  <MarkdownPage content={contentWithComponent} />
  <ApkList />
    </div>
  );
}

export default Apk;

