const structure = [
  {
    'folder': true,
    'title': 'Films',
    'children': [
      {
        'title': 'Iron Man.avi'
      },
      {
        'folder': true,
        'title': 'Fantasy',
        'children': [
          {
            'title': 'The Lord of the Rings.avi'
          },
          {
            'folder': true,
            'title': 'New folder 1',
            'children': false
          }
        ]
      }
    ]
  },
  {
    'folder': true,
    'title': 'Documents',
    'children': [
      {
        'folder': true,
        'title': 'EPAM Homework answers',
        'children': null
      }
    ]
  }
];

const rootNode = document.getElementById('root'),
      fileTree = document.createElement('ul');

renderStructure(structure, fileTree);
rootNode.appendChild(fileTree)

function renderStructure(object, parent) {
  for (let i = 0; i < object.length; i++) {
    const images = document.createElement('i'),
          paragraph = document.createElement('p'),
          listItem = document.createElement('li'),
          unorderedList = document.createElement('ul');

    images.className = 'material-icons';
    if (object[i].folder) {
      images.innerText = 'folder';
      images.classList.add('folder');
    } else {
      images.innerText = 'insert_drive_file';
      images.classList.add('file');
    }
    paragraph.addEventListener('click', toggleOpen);
    paragraph.appendChild(images);
    paragraph.innerHTML += object[i].title;
    listItem.appendChild(paragraph);
    parent.appendChild(listItem);
    if (object[i].children) {
      listItem.appendChild(unorderedList);
      unorderedList.classList.add('invisible');
      renderStructure(object[i].children, unorderedList);
    }
    if (object[i].folder && !object[i].children) {
      const empty = document.createElement('p');
      empty.innerText = 'Folder is empty';
      empty.classList.add('empty', 'invisible');
      listItem.appendChild(empty);
    }
  }
}

function toggleOpen(e) {
  const sbl = e.target.nextSibling;
  if (sbl && sbl.classList.contains('invisible')) {
    sbl.classList.toggle('visible');
    sbl.classList.toggle('invisible');
    e.target.firstChild.innerText = 'folder_open';
  } else if (sbl) {
    sbl.classList.toggle('visible');
    sbl.classList.toggle('invisible');
    e.target.firstChild.innerText = 'folder';
  }
}