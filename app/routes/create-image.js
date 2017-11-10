import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').findAll('image');
  },

  actions: {
    didTransition() {
      Ember.run.scheduleOnce('afterRender', this, () => {
        // TweenMax.to('.title-sec .title', .4, {delay: .3, y: 0, opacity: 1, ease:Expo.easeOut});
        // TweenMax.to('.text-sec', .7, {delay: .5, y: 0, opacity: 1, ease:Expo.easeOut});
      });
    },

    createImage() {

      let { url, title, piecetitle, artists, size } = this.controller.getProperties('url', 'title', 'piecetitle', 'artists', 'size');
      let form = document.getElementById('create-image-form');
      let formChildren = form.children;
      let dropdown = document.getElementById('image-list');
      let showId = document.getElementById('showSelect').value;
      // console.log(selectedShow);
      let img;

      function failure() {
        alert("We've encountered an error trying to make/update your record! Try again please!");
      }

      if (dropdown.selectedIndex == -1) {
        return null;
      } else if (dropdown.selectedIndex == 0) {
        let sure = confirm('Are you sure you want to create an image with the following info?\n\n' + 'title: ' + title + '\nurl: ' + url + '\npiece title: ' + piecetitle + '\nartists: ' + artists);

        if (sure == true) {
          let selectedShow = this.get('store').peekRecord('show', showId);

          img = this.get('store').createRecord('image', {
            // file: ;aslkdfja;sdf,
            show: selectedShow,
            title: title,
            url: url,
            piecetitle: piecetitle,
            artists: artists,
            size: size
          });

          img.save().then(function() {

            selectedShow.save().then(function() {
              alert('Success again!')
            }).catch(function() {
              alert('There was another error!')
            })

            alert('Success!')
            document.getElementById('create-image-form').reset();

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

          this.get('store').findRecord('image', pageId).then(function(img) {
            // console.log('this is the wrapper ' + wrapper);
            img.setProperties({
              show: selectedShow,
              title: formChildren[2].children[0].value,
              url: formChildren[1].children[0].value,
              piecetitle: formChildren[3].children[0].value,
              artists: formChildren[4].children[0].value,
              size: formChildren[5].children[0].value
            })
            img.save().then(function() {
              alert('Success!')
            }).catch(failure);
          });
        } else {

        }
      }
    },
    loadImage() {
      /// Action to load records into form on dropdown change event

      function getText(elId) {
        let page = document.getElementById(elId);

        if (page.selectedIndex == -1) {
          return null;
        } else if (page.selectedIndex == 0) {
          $('button[type=submit]').text('Create');
          $('div.delete').css('display', 'none');
          document.getElementById('create-image-form').reset();
        } else {
          $('button[type=submit]').text('Update');
          $('div.delete').css('display', 'inline-block');
          var yup = page.options[page.selectedIndex].dataset.id;
          // console.log('yup = ' + yup);
          return yup;
        }
      }

      let pageName = getText('image-list');
      console.log(pageName);
      let form = document.getElementById('create-image-form').children;
      // console.log(form);
      let newData = this.get('store').peekRecord('image', pageName);
      console.log(newData);
      let pageData = newData.getProperties('url', 'title', 'piecetitle', 'artists', 'size');

      form[5].children[0].value = pageData.size;
      form[4].children[0].value = pageData.artists;
      form[3].children[0].value = pageData.piecetitle;
      form[2].children[0].value = pageData.title;
      form[1].children[0].value = pageData.url;
      form[0].children[0].value = pageData.show;
    },

    deleteRecord() {

      /// Action to delete records

      let form = document.getElementById('create-image-form');
      let dropdown = document.getElementById('image-list');
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
        this.get('store').findRecord('image', pageId, { backgroundReload: false }).then(function(page) {
          page.destroyRecord().then(deleteSuccess).catch(deleteFailure);
        });
      } else {

      }
    }

  }
});
