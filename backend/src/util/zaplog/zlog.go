package zaplog

import (
	"time"

	"github.com/natefinch/lumberjack"
	"go.uber.org/zap"
	"go.uber.org/zap/zapcore"
)

type ZlogFormater struct {
	ZapLogger *zap.Logger
}

func (l *ZlogFormater) Info(msg string) {
	l.ZapLogger.Info(msg)
}

func (l *ZlogFormater) Warn(msg string) {
	l.ZapLogger.Warn(msg)
}

func (l *ZlogFormater) Error(msg string) {
	l.ZapLogger.Error(msg)
}

var Logger *ZlogFormater

func InitZapLog() error {
	hook := lumberjack.Logger{
		Filename:   "log/mini.log", // 日志文件路径
		MaxSize:    128,            // 每个日志文件保存的大小 单位:M
		MaxAge:     7,              // 文件最多保存多少天
		MaxBackups: 30,             // 日志文件最多保存多少个备份
		Compress:   true,           // 是否压缩
	}
	encoderConfig := zapcore.EncoderConfig{
		MessageKey:    "msg",
		LevelKey:      "level",
		TimeKey:       "time",
		NameKey:       "logger",
		CallerKey:     "file",
		StacktraceKey: "stacktrace",
		LineEnding:    zapcore.DefaultLineEnding,
		EncodeLevel: func(l zapcore.Level, enc zapcore.PrimitiveArrayEncoder) {
			enc.AppendString("[" + l.String() + "]")
		},
		EncodeTime: func(t time.Time, enc zapcore.PrimitiveArrayEncoder) {
			enc.AppendString("[" + t.Format("2006-01-02 15:04:05") + "]")
		},
		EncodeDuration: zapcore.SecondsDurationEncoder,
		EncodeCaller: func(caller zapcore.EntryCaller, enc zapcore.PrimitiveArrayEncoder) {
			enc.AppendString("[" + caller.TrimmedPath() + "]")
		},
		EncodeName: zapcore.FullNameEncoder,
	}

	atomicLevel := zap.NewAtomicLevel()
	atomicLevel.SetLevel(zap.DebugLevel)
	var writes = []zapcore.WriteSyncer{zapcore.AddSync(&hook)}
	core := zapcore.NewCore(
		zapcore.NewConsoleEncoder(encoderConfig),
		zapcore.NewMultiWriteSyncer(writes...),
		atomicLevel,
	)

	// 开启开发模式，堆栈跟踪
	caller := zap.AddCaller()
	// 开启文件及行号
	development := zap.Development()

	// 构造日志
	logger := zap.New(core, caller, development, zap.AddCallerSkip(1))

	defer logger.Sync()
	Logger = &ZlogFormater{
		ZapLogger: logger,
	}
	return nil
}
