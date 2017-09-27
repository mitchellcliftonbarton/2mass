import Ember from 'ember';
import AuthenticatedRouteMixin from 'ember-simple-auth/mixins/authenticated-route-mixin';

export default Ember.Route.extend(AuthenticatedRouteMixin, {
  model(params) {
    return this.get('store').findAll('show')
  },

  actions: {
    didTransition() {
      Ember.run.scheduleOnce('afterRender', this, () => {
        // TweenMax.to('.title-sec .title', .4, {delay: .3, y: 0, opacity: 1, ease:Expo.easeOut});
        // TweenMax.to('.text-sec', .7, {delay: .5, y: 0, opacity: 1, ease:Expo.easeOut});
      });
    },

    createPage() {

      let { title, when, link, status, text} = this.controller.getProperties('title', 'when', 'link', 'status', 'text');
      let form = document.getElementById('create-page-form');
      let formChildren = form.children;
      let dropdown = document.getElementById('page-list');
      let show;
      let images = this.controllerFor('create-page').get('selectedImages');

      function failure() {
        alert("We've encountered an error trying to make/update your record! Try again please!");
      }

      if (dropdown.selectedIndex == -1) {
        return null;
      } else if (dropdown.selectedIndex == 0) {
        let sure = confirm('Are you sure you want to create a show with the following info?\n\n' + 'title: ' + title + '\ndate: ' + when + '\nlink: ' + link + '\nstatus: ' + status + '\ntext: ' + text + '\nimages: ' + images);

        if (sure == true) {

          show = this.get('store').createRecord('show', {
            title: title,
            when: when,
            link: link,
            status: status,
            text: text
          });

          show.save().then(function() {
            alert('Success!')

            document.getElementById('create-page-form').reset();
          }).catch(function() {
            alert('There was an error!')
          });

          let i = show.get('id');
          console.log('i =' + i);

          // this.get('store').findRecord('show', ).then(function(images) {
          //   show.set('images', images);
          // })

        } else {

        }
      } else {

        let pageId = dropdown.options[dropdown.selectedIndex].dataset.id;
        let sure = confirm('Are you sure you want to update this record?');
        console.log('poop')

        if (sure == true) {
          this.get('store').findRecord('show', pageId).then(function(show) {
            // console.log('this is the wrapper ' + wrapper);
            show.setProperties({
              title: formChildren[1].children[0].value,
              when: formChildren[0].children[0].value,
              // artists: formChildren[2].children[0].value,
              link: formChildren[2].children[0].value,
              status: formChildren[3].children[0].value,
              text: formChildren[4].children[0].value
            })
            show.save().then(function() {
              alert('Success!')
            }).catch(failure);
          });
        } else {

        }
      }
    },
    loadPage() {
      /// Action to load records into form on dropdown change event

      function getText(elId) {
        let page = document.getElementById(elId);

        if (page.selectedIndex == -1) {
          return null;
        } else if (page.selectedIndex == 0) {
          $('button[type=submit]').text('Create');
          $('div.delete').css('display', 'none');
          document.getElementById('create-page-form').reset();
        } else {
          $('button[type=submit]').text('Update');
          $('div.delete').css('display', 'inline-block');
          var yup = page.options[page.selectedIndex].dataset.id;
          // console.log('yup = ' + yup);
          return yup;
          // return page.options[page.selectedIndex].dataset.id;
        }
      }

      // let c = this.controllerFor('create-page').get('selectedPeople');
      // console.log('c =' + c);

      let pageName = getText('page-list');
      let form = document.getElementById('create-page-form').children;
      let newData = this.get('store').peekRecord('show', pageName); /// not sure if you can peek record by things other than id name
      let pageData = newData.getProperties('title', 'when', 'link', 'status', 'text');

      form[1].children[0].value = pageData.title;
      form[0].children[0].value = pageData.when;
      // form[2].children[0].value = pageData.artists;
      form[2].children[0].value = pageData.link;
      form[3].children[0].value = pageData.status;
      form[4].children[0].value = pageData.text;
    },

    deleteRecord() {

      /// Action to delete records

      let form = document.getElementById('create-page-form');
      let dropdown = document.getElementById('page-list');
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
        this.get('store').findRecord('show', pageId, { backgroundReload: false }).then(function(page) {
          page.destroyRecord().then(deleteSuccess).catch(deleteFailure);
        });
      } else {

      }
    }

  }
});
