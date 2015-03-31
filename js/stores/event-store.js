module.exports = {
  events: [
    {
      id: 1,
      date: 'February 29th, 2015',
      title: 'This is "real" data',
      description: 'This is a "real" description',
      authorName: 'Tod Rocket',
      authorInitials: 'TR',
      catering: 'Chipotle'
    }
  ],

  findAll() {
    return this.events;
  },

  findById(id) {
    id = parseInt(id);
    return this.events.reduce((memo, value) => {
      if(value.id === id) { memo.push(value); }
      return memo;
    }, [])[0];
  },

  update(updatedEvent) {
    var event = this.findById(updatedEvent.id);
  }
};
