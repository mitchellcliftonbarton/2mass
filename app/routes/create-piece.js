import Ember from 'ember';

export default Ember.Route.extend({

  model(params) {
    return this.get('store').findAll('piece');
  },

  actions: {
    didTransition() {
      Ember.run.scheduleOnce('afterRender', this, () => {
        // TweenMax.to('.title-sec .title', .4, {delay: .3, y: 0, opacity: 1, ease:Expo.easeOut});
        // TweenMax.to('.text-sec', .7, {delay: .5, y: 0, opacity: 1, ease:Expo.easeOut});
      });
    },

    createPiece() {

      let { title } = this.controller.getProperties('title');
      let form = document.getElementById('create-piece-form');
      let formChildren = form.children;
      let dropdown = document.getElementById('piece-list');
      let showId = document.getElementById('showSelect').value;
      let personId = document.getElementById('personSelect').value;
      let img;

      function failure() {
        alert("We've encountered an error trying to make/update your record! Try again please!");
      }

      if (dropdown.selectedIndex == -1) {
        return null;
      } else if (dropdown.selectedIndex == 0) {
        let sure = confirm('Are you sure you want to create an piece with the following info?\n\n' + 'title: ' + title);

        if (sure == true) {
          let selectedShow = this.get('store').peekRecord('show', showId);
          let selectedPerson = this.get('store').peekRecord('person', personId);

          img = this.get('store').createRecord('piece', {
            show: selectedShow,
            title: title,
            person: selectedPerson
          });

          img.save().then(function() {

            selectedShow.save().then(function() {
              alert('Success again!')
            }).catch(function() {
              alert('There was another error!')
            })

            alert('Success!')
            document.getElementById('create-piece-form').reset();

          }).catch(function() {
            alert('There was an error!')
          });

        } else {

        }
      } else {

        let pageId = dropdown.options[dropdown.selectedIndex].dataset.id;
        let sure = confirm('Are you sure you want to update this record?');

        if (sure == true) {
          let selectedShow = this.get('store').peekRecord('show', showId);
          let selectedPerson = this.get('store').peekRecord('person', personId);

          this.get('store').findRecord('piece', pageId).then(function(img) {
            // console.log('this is the wrapper ' + wrapper);
            img.setProperties({
              show: selectedShow,
              title: formChildren[2].children[0].value,
              person: selectedPerson
            })
            img.save().then(function() {
              alert('Success!')
            }).catch(failure);
          });
        } else {

        }
      }
    },
    loadPiece() {
      /// Action to load records into form on dropdown change event

      function getText(elId) {
        let page = document.getElementById(elId);

        if (page.selectedIndex == -1) {
          return null;
        } else if (page.selectedIndex == 0) {
          $('button[type=submit]').text('Create');
          $('div.delete').css('display', 'none');
          document.getElementById('create-piece-form').reset();
        } else {
          $('button[type=submit]').text('Update');
          $('div.delete').css('display', 'inline-block');
          var yup = page.options[page.selectedIndex].dataset.id;
          // console.log('yup = ' + yup);
          return yup;
        }
      }

      let pageName = getText('piece-list');
      console.log(pageName);
      let form = document.getElementById('create-piece-form').children;
      // console.log(form);
      let newData = this.get('store').peekRecord('piece', pageName);
      console.log(newData);
      let pageData = newData.getProperties('title');

      form[2].children[0].value = pageData.title;
      // form[1].children[0].value = pageData.url;
      // form[0].children[0].value = pageData.show;
    },

    deleteRecord() {

      /// Action to delete records

      let form = document.getElementById('create-piece-form');
      let dropdown = document.getElementById('piece-list');
      let page;

      function deleteSuccess() {
        alert('You just deleted this record!');
        form.reset();
      }

      function deleteFailure() {
        alert('Sorry, deleting this record failed for some reason');
      }

      let pageId = dropdown.options[dropdown.selectedIndex].dataset.id;
      var sure = confirm('You are trying to delete this record. Are you sure you want to delete this record?')

      if (sure == true) {
        this.get('store').findRecord('piece', pageId, { backgroundReload: false }).then(function(page) {
          page.destroyRecord().then(deleteSuccess).catch(deleteFailure);
        });
      } else {

      }
    }

  }
});
