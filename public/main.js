(function(){
		showViewContact();
	})();


	function displayContact(){
		var contacts = JSON.parse(localStorage.contacts);
		var table = document.getElementById("t2");

		if(contacts.length === 0){
			return table.innerHTML = `<tr><td colspan="6">No contacts found</td></tr>`;
		}
		
		var t = "";	
		t = `<tr>
		<th><input type='checkbox'></th>
		<th align='left'>Name</th>
		<th align='left'>Title</th>
		<th align='left'>Company</th>
		<th align='left'>Email</th>
		<th align='left'>Phone</th>
		<th align='left'>Created Date</th>
		</tr>`;

		var contacts = JSON.parse(localStorage.contacts);
		for(var i=0;i<contacts.length;i++){
			if(contacts[i][6]=="1"){
				t += `<tr class='markedFavorite'><td><input type='checkbox'></td>
						<td>${contacts[i][0]}</td>
						<td>${contacts[i][1]}</td>
						<td>${contacts[i][2]}</td>
						<td>${contacts[i][3]}</td>
						<td>${contacts[i][4]}</td>
						<td>${contacts[i][5]}</td>
						<td><button type='button' onclick='deleteContact(${i})'>
						<i class="fa fa-trash-o" aria-hidden="true">
						<span class="tooltiptext-top">Delete Contact</span>
						</i></button>
						</td>
						<td><button type='button' onclick='markFavorite(${i})'>
						<i class="fa fa-star-o" aria-hidden="true">
						<span class="tooltiptext">Unmark as Favorite</span>
						</i></button>
						</td>
					</tr>`;
			}else{
				t += `<tr><td><input type='checkbox'></td>
						<td>${contacts[i][0]}</td>
						<td>${contacts[i][1]}</td>
						<td>${contacts[i][2]}</td>
						<td>${contacts[i][3]}</td>
						<td>${contacts[i][4]}</td>
						<td>${contacts[i][5]}</td>
						<td><button type='button' onclick='deleteContact(${i})'>
						<i class="fa fa-trash-o" aria-hidden="true">
						<span class="tooltiptext-top">Delete Contact</span>
						</i></button>
						</td>
						<td><button type='button' onclick='markFavorite(${i})'>
						<i class="fa fa-star-o" aria-hidden="true">
						<span class="tooltiptext">Mark as favorite</span>
						</i></button>
						</td>
					</tr>`;
			}
		}
		table.innerHTML = t;
		
		var row = document.getElementsByClassName("markedFavorite");
		var col = [];

		if(row.length > 0){
			for(var i=0;i<row.length;i++){
				col.push(row[i].children);
			}
			for(var j=0;j<row.length;j++){
				for(var i=0;i<col[j].length;i++){
					col[j][i].style.backgroundColor="#ffb300";
				}
			}
				
		}

	}

	function displayFavorites(){
		var table = document.getElementById("t2");
		var t = "";	
		t = `<tr>
		<th><input type='checkbox'></th>
		<th align='left'>Name</th>
		<th align='left'>Title</th>
		<th align='left'>Company</th>
		<th align='left'>Email</th>
		<th align='left'>Phone</th>
		<th align='left'>Created Date</th>
		</tr>`;

		var contacts = JSON.parse(localStorage.contacts);
		var count = 0;
		for(var i=0;i<contacts.length;i++){
			if(contacts[i][6]=="1"){
				t += `<tr class='markedFavorite'><td><input type='checkbox'></td>
						<td>${contacts[i][0]}</td>
						<td>${contacts[i][1]}</td>
						<td>${contacts[i][2]}</td>
						<td>${contacts[i][3]}</td>
						<td>${contacts[i][4]}</td>
						<td>${contacts[i][5]}</td>
						<td><button type='button' onclick='deleteContact(${i})'>
						<i class="fa fa-trash-o" aria-hidden="true">
						<span class="tooltiptext-top">Delete Contact</span>
						</i></button>
						</td>
						<td><button type='button' onclick='markFavorite(${i})'>
						<i class="fa fa-star-o" aria-hidden="true">
						<span class="tooltiptext">Unmark as Favorite</span>
						</i></button>
						</td>
					</tr>`;
				count++;
			}
		}
		console.log(count);
		if(count === 0){
			t = `<tr><td colspan="6"">You do not have any favorites</td></tr>`
		}

		table.innerHTML = t;
		
		var row = document.getElementsByClassName("markedFavorite");
		var col = [];

		if(row.length > 0){
			for(var i=0;i<row.length;i++){
				col.push(row[i].children);
			}
			for(var j=0;j<row.length;j++){
				for(var i=0;i<col[j].length;i++){
					col[j][i].style.backgroundColor="#ffb300";
				}
			}
				
		}

	}

	function displayDeletedContact(){
		var table = document.getElementById("t2");
		var t = "";	
		t = `<tr>
		<th><input type='checkbox'></th>
		<th align='left'>Name</th>
		<th align='left'>Title</th>
		<th align='left'>Company</th>
		<th align='left'>Email</th>
		<th align='left'>Phone</th>
		<th align='left'>Created Date</th>
		</tr>`;

		var contacts = JSON.parse(localStorage.deletedContacts);

		for(var i=0;i<contacts.length;i++){
			t += `<tr id='markedFavorite'><td><input type='checkbox'></td>
					<td>${contacts[i][0]}</td>
					<td>${contacts[i][1]}</td>
					<td>${contacts[i][2]}</td>
					<td>${contacts[i][3]}</td>
					<td>${contacts[i][4]}</td>
					<td>${contacts[i][5]}</td>
					<td><button type='button' onclick='recoverContact(${i})'>
					<i class="fa fa-undo" aria-hidden="true">
					<span class="tooltiptext">Restore Contact</span>
					</i></button>
					</td>
				</tr>`;
		}

		// console.log(contacts.length);
		if(contacts.length === 0){
			t = `<tr><td colspan="6"">No deleted contacts found</td></tr>`
		}

		table.innerHTML = t;
	}

	function displaySearchedItems(){
		var ul = document.getElementById("searchedItemsList");
		var li = "";	
		var searchedItems = JSON.parse(localStorage.getItem("searchedItems")) || [];
		if(searchedItems.length>0){
			for(var i=0;i<searchedItems.length;i++){
				li += `<li>${searchedItems[i]}</li>`;
			}	
		}else{
			li = "<li>No record found</li>";
		}
		ul.innerHTML = li;
	}


	function addContact(){
		var x = document.forms[0];
		var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
		var name = x.elements[0].value;
		var title = x.elements[1].value;
		var company = x.elements[2].value;
		var email = x.elements[3].value;
		var number = x.elements[4].value;
		var date = x.elements[5].value;
		
		contacts.push([name,title,company,email,number,date,0]);
		localStorage.setItem("contacts",JSON.stringify(contacts));
		displayContact();
	}

	function deleteContact(id){
		var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
		addToDeletedContacts(contacts.splice(id,1));
		localStorage.setItem("contacts",JSON.stringify(contacts));
		displayContact();
	}

	function recoverContact(id){
		var deletedContacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];
		var toRecover = deletedContacts.splice(id,1);
		var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
		contacts.push(toRecover[0]);
		localStorage.setItem("contacts",JSON.stringify(contacts));
		localStorage.setItem("deletedContacts",JSON.stringify(deletedContacts));
		showDeletedContact();	
	}

	function addToDeletedContacts(item){
		var deletedContacts = JSON.parse(localStorage.getItem("deletedContacts")) || [];
		deletedContacts.push(item[0]);
		localStorage.setItem("deletedContacts",JSON.stringify(deletedContacts));
		displayDeletedContact();
	}


	function markFavorite(id){
		var contacts = JSON.parse(localStorage.getItem("contacts")) || [];
		if(contacts[id][6]==="0"){
			contacts[id][6]="1";
		}else{
			contacts[id][6]="0";
		}
		localStorage.setItem("contacts",JSON.stringify(contacts));
		showViewContact();
	}

	function showAddContact(){
		removeBody();
		document.getElementsByClassName('addContact')[0].style.display = 'flex';
		document.getElementsByClassName('addContact')[0].style.justifyContent = 'center';
	}

	function showViewContact(){
		removeBody();
		displayContact();
		document.getElementsByClassName('options')[0].style.display = 'block';
		document.getElementById('t2').style.display = 'block';	
	}

	function showFavoriteContact(){
		removeBody();
		displayFavorites();
		document.getElementById('t2').style.display = 'block';	
	}

	function showSearchedContact(){
		removeBody();
		displaySearchedItems();
		document.getElementsByClassName('searchedItemsList')[0].style.display = 'block';
	}

	function showDeletedContact(){
		removeBody();
		displayDeletedContact();
		document.getElementById('t2').style.display = 'block';	
	}

	function removeBody(){
		var list = document.getElementsByClassName('contact-list')[0].children;
		for(var i=0;i<list.length;i++){
			list[i].style.display = 'none';
			// console.log(list[i]);	
		}
	}

	function searchName(){
		displayContact();
		var input, tr, names, no, filter, table, txtValue;
		input = document.getElementById("search");
		table = document.getElementById("t2");
		filter = input.value.toUpperCase();
		tr = table.getElementsByTagName("tr");

		var searchedItems = JSON.parse(localStorage.getItem("searchedItems")) || [];
		searchedItems.push(input.value);
		localStorage.setItem("searchedItems",JSON.stringify(searchedItems));

		for(var i=0;i<tr.length;i++){
			names = tr[i].getElementsByTagName("td")[1];
			no = tr[i].getElementsByTagName("td")[5];
			if(names && no){
				namesSearch = names.textContent || names.innerText;
				noSearch = no.textContent || no.innerText;
				// console.log(names,no, '  ', filter);
				if(namesSearch.toUpperCase().indexOf(filter)>-1 || noSearch.indexOf(filter)>-1){
					tr[i].style.display='';
				}else{
					tr[i].style.display='none';
				}
			}
		}
	}