//skeleton for sever js testing 

describe('Blobs', function() {
    it('should list ALL blobs on /blobs GET');
    it('should list a SINGLE blob on /blob/<id> GET');
    it('should add a SINGLE blob on /blobs POST');
    it('should update a SINGLE blob on /blob/<id> PUT');
    it('should delete a SINGLE blob on /blob/<id> DELETE');
  });

  it('should list ALL blobs on /blobs GET', function(done) {
    chai.request(server)
      .get('/blobs')
      .end(function(err, res){
        res.should.have.status(200);
        done();
      });
  });

  // add data for get and post 