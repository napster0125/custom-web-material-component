
  describe('switch tests', function () {

    it('Should have MaterialSwitch globally available', function () {
      expect(MaterialSwitch).to.be.a('function');
    });

    it('Should be upgraded to a MaterialSwitch successfully', function () {
      var el = document.createElement('div');
      el.innerHTML = '<input type="checkbox" class="wsk-switch__input">';
      componentHandler.upgradeElement(el, 'MaterialSwitch');
      var upgraded = el.getAttribute('data-upgraded');
      expect(upgraded).to.contain('MaterialSwitch');
    });
  });
