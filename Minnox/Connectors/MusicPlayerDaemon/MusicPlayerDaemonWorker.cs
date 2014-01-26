using Libmpc;

namespace Minnox.Connectors.MusicPlayerDaemon
{
    public class MusicPlayerDaemonWorker : IWorker<MusicPlayerDaemonConnection>
    {
        private MusicPlayerDaemonConnection _connection;
        private MpcConnection _mpcConnection;

        public string ShortName { get { return "mpd-worker"; } }

        public void Stop()
        {
            _mpcConnection.Disconnect();
        }

        public void Init(Connection connection)
        {
            _connection = connection as MusicPlayerDaemonConnection;
        }

        public void Start()
        {
            _mpcConnection = new MpcConnection(_connection.EndPoint);
            var mpc = new Mpc {Connection = _mpcConnection};
        }

       
    }
}